import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import apiClient from "../api/apiClient";
import { dataDB, type DataDB } from "../data/dataDB";
import type { FilterParams } from "../api/createFilter";
import type { PaginatedResult } from "../api/DBClient";

const dataApi = apiClient("data", 3000, dataDB);

export const dataAPI = createApi({
  reducerPath: "data",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getDataById: builder.query<DataDB, string | number>({
      async queryFn(id) {
        try {
          const data = await dataApi.getById(id);
          return { data };
        } catch (error) {
          return { error: error as Error };
        }
      },
    }),
    getFilterData: builder.query<DataDB[], FilterParams<DataDB>>({
      async queryFn(params) {
        try {
          const data = await dataApi.getFilterData(params);
          return { data };
        } catch (error) {
          return { error: error as Error };
        }
      },
    }),
    getFilteredPaginated: builder.infiniteQuery<
      PaginatedResult<DataDB>,
      { filter: FilterParams<DataDB>; limit: number },
      number
    >({
      async queryFn({ queryArg, pageParam }) {
        try {
          const data = await dataApi.getFilteredPaginated(
            queryArg.filter,
            pageParam,
            queryArg.limit,
          );
          return { data };
        } catch (error) {
          return { error: error as Error };
        }
      },

      serializeQueryArgs: ({ queryArgs }) => {
        return JSON.stringify(queryArgs.filter);
      },

      infiniteQueryOptions: {
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
          if (
            lastPage.pagination.currentPage < lastPage.pagination.totalPages
          ) {
            return lastPage.pagination.currentPage + 1;
          }
          return undefined;
        },
      },
    }),
  }),
});

export const {
  useGetDataByIdQuery,
  useGetFilterDataQuery,
  useGetFilteredPaginatedInfiniteQuery,
} = dataAPI;
