import { createFilter, type FilterParams } from "./createFilter";
import DBClient from "./DBClient";
import type { PaginatedResult, BackendResponse } from "./DBClient";

function apiClient<T extends { id?: string|number }>(
  collectionName: string,
  delay = 500,
  data: T[] = [],
) {
  const client = new DBClient<T>(collectionName, delay, data);

  return {
    create: async (item: Omit<T, "id">): Promise<T> => {
      const response: BackendResponse<T> = await client.create(item);
      return response.data;
    },
    getAll: async (): Promise<T[]> => {
      const response: BackendResponse<T[]> = await client.readAll();
      return response.data;
    },
    getById: async (id: string | number): Promise<T> => {
      const response: BackendResponse<T> = await client.readById(id);
      return response.data;
    },
    getPaginated: async (
      page: number,
      limit: number,
    ): Promise<PaginatedResult<T>> => {
      const response: BackendResponse<PaginatedResult<T>> =
        await client.readPaginated(page, limit);
      return response.data;
    },
    update: async (id: string, item: Partial<T>): Promise<T> => {
      const response: BackendResponse<T> = await client.update(id, item);
      return response.data;
    },
    delete: async (
      id: string | number,
    ): Promise<{ message: string; id: string | number }> => {
      const response: BackendResponse<{
        message: string;
        id: string | number;
      }> = await client.delete(id);
      return response.data;
    },
    getFilterData: async (params: FilterParams<T>): Promise<T[]> => {
      const response = await client.readFiltered(createFilter(params));
      return response.data;
    },
    getFilteredPaginated: async (
      params: FilterParams<T>,
      page: number,
      limit: number,
    ): Promise<PaginatedResult<T>> => {
      const response = await client.readFilteredPaginated(params, page, limit);
      return response.data;
    },
  };
}

export default apiClient;
