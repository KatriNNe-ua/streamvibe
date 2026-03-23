import { createFilter, type FilterParams } from "./createFilter";

export interface BackendResponse<T> {
  data: T;
}

export interface BackendError {
  message: string;
  code: number;
  details: string;
}

export interface PaginatedResult<T> {
  items: T[];
  pagination: {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    pageSize: number;
  };
}

class DBClient<T extends { id?: string | number }> {
  private collectionName: string;
  private delay: number;
  private initialData: T[];
  private errorRate: number;

  constructor(
    collectionName: string,
    delay = 500,
    initialData: T[] = [],
    errorRate = 0,
  ) {
    this.collectionName = `db_${collectionName}`;
    this.delay = delay;
    this.initialData = initialData;
    this.errorRate = errorRate;
    this._initializeCollection();
  }

  private _initializeCollection(): void {
    if (!localStorage.getItem(this.collectionName)) {
      localStorage.setItem(
        this.collectionName,
        JSON.stringify(this.initialData),
      );
    }
  }

  private _getData(): T[] {
    return JSON.parse(localStorage.getItem(this.collectionName) || "[]");
  }

  private _setData(data: T[]): void {
    localStorage.setItem(this.collectionName, JSON.stringify(data));
  }

  private _imitateBackendCall<R>(
    callback: () => R,
  ): Promise<BackendResponse<R>> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < this.errorRate) {
          reject({
            message: "Помилка бекенду: сталася невідома помилка.",
            code: 500,
            details: "Спробуйте пізніше.",
          } as BackendError);
        } else {
          try {
            const result = callback();
            resolve({ data: result });
          } catch (e: unknown) {
            if (e instanceof Error) {
              reject({
                message: e.message,
                code: 500,
                details: e.toString(),
              } as BackendError);
            } else {
              reject({
                message: "Непередбачена помилка під час обробки даних.",
                code: 500,
                details: String(e),
              } as BackendError);
            }
          }
        }
      }, this.delay);
    });
  }

  async create(item: Omit<T, "id">): Promise<BackendResponse<T>> {
    return this._imitateBackendCall(() => {
      const data = this._getData();
      const newItem = { id: Date.now(), ...item } as T;
      data.push(newItem);
      this._setData(data);
      return newItem;
    });
  }

  async readAll(): Promise<BackendResponse<T[]>> {
    return this._imitateBackendCall(() => {
      return this._getData();
    });
  }

  async readById(id: string | number): Promise<BackendResponse<T>> {
    return this._imitateBackendCall(() => {
      const data = this._getData();
      const foundItem = data.find((item) => String(item.id) === String(id));
      if (!foundItem) {
        throw new Error("Елемент не знайдено.");
      }
      return foundItem;
    });
  }

  async readPaginated(
    page = 1,
    limit = 10,
  ): Promise<BackendResponse<PaginatedResult<T>>> {
    return this._imitateBackendCall(() => {
      const data = this._getData();
      const totalItems = data.length;
      const totalPages = Math.ceil(totalItems / limit);
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const items = data.slice(startIndex, endIndex);

      return {
        items: items,
        pagination: {
          totalItems: totalItems,
          totalPages: totalPages,
          currentPage: page,
          pageSize: limit,
        },
      };
    });
  }

  async update(
    id: string | number,
    updatedItem: Partial<T>,
  ): Promise<BackendResponse<T>> {
    return this._imitateBackendCall(() => {
      const data = this._getData();
      const index = data.findIndex((item) => String(item.id) === String(id));
      if (index > -1) {
        data[index] = { ...data[index], ...updatedItem, id };
        this._setData(data);
        return data[index];
      }
      throw new Error("Елемент для оновлення не знайдено.");
    });
  }

  async delete(
    id: string | number,
  ): Promise<BackendResponse<{ message: string; id: string | number }>> {
    return this._imitateBackendCall(() => {
      let data = this._getData();
      const initialLength = data.length;
      data = data.filter((item) => item.id !== id);
      this._setData(data);
      if (data.length === initialLength) {
        throw new Error("Елемент для видалення не знайдено.");
      }
      return { message: "Елемент успішно видалено.", id: id };
    });
  }

  async readFiltered(
    filterFn: (item: T) => boolean,
  ): Promise<BackendResponse<T[]>> {
    return this._imitateBackendCall(() => {
      const data = this._getData();
      return data.filter(filterFn);
    });
  }

  async readFilteredPaginated(
    params: FilterParams<T>,
    page = 1,
    limit = 10,
  ): Promise<BackendResponse<PaginatedResult<T>>> {
    return this._imitateBackendCall(() => {
      const data = this._getData();

      // 1. Фільтр
      const filtered = data.filter(createFilter(params));

      // 2. Пагінація
      const totalItems = filtered.length;
      const totalPages = Math.ceil(totalItems / limit);
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const items = filtered.slice(startIndex, endIndex);

      return {
        items,
        pagination: {
          totalItems,
          totalPages,
          currentPage: page,
          pageSize: limit,
        },
      };
    });
  }
}

export default DBClient;
