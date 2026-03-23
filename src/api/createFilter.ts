export type Primitive = string | number | boolean;

export type FilterOperators<T> = {
  eq?: T;
  includes?: string;
  in?: T[];
  gt?: number;
  lt?: number;
};

export type FilterParams<T> = {
  [K in keyof T]?: T[K] | T[K][] | FilterOperators<T[K]>;
};

export function createFilter<T>(params: FilterParams<T>) {
  return (item: T): boolean => {
    return (
      Object.entries(params) as [keyof T, FilterParams<T>[keyof T]][]
    ).every(([key, value]) => {
      const itemValue = item[key];

      // 🔹 primitive
      if (
        typeof value === "string" ||
        typeof value === "number" ||
        typeof value === "boolean"
      ) {
        if (typeof itemValue === "string" && typeof value === "string") {
          return itemValue.toLowerCase().includes(value.toLowerCase());
        }
        return itemValue === value;
      }

      // 🔹 array
      if (Array.isArray(value)) {
        if (Array.isArray(itemValue)) {
          return value.some((v) => itemValue.includes(v));
        }
        return value.includes(itemValue as (typeof value)[number]);
      }

      // 🔹 operators
      if (value && typeof value === "object") {
        const operators = value as FilterOperators<typeof itemValue>;

        if (operators.eq !== undefined) {
          return itemValue === operators.eq;
        }

        if (operators.includes && typeof itemValue === "string") {
          return itemValue
            .toLowerCase()
            .includes(operators.includes.toLowerCase());
        }

        if (operators.in) {
          return operators.in.includes(
            itemValue as (typeof operators.in)[number],
          );
        }

        if (operators.gt !== undefined && typeof itemValue === "number") {
          return itemValue > operators.gt;
        }

        if (operators.lt !== undefined && typeof itemValue === "number") {
          return itemValue < operators.lt;
        }
      }

      return true;
    });
  };
}