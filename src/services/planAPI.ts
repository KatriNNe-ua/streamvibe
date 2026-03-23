import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import apiClient from "../api/apiClient";
import { plans, type Plan } from "../data/plansDB";

const planApi = apiClient("project", 3000, plans);

export const planAPI = createApi({
  reducerPath: "plan",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getPlans: builder.query<Plan[], void>({
      async queryFn() {
        try {
          const data = await planApi.getAll();
          return { data };
        } catch (error) {
          return { error: error as Error };
        }
      },
      keepUnusedDataFor: 600,
    }),

  }),
});

export const { useGetPlansQuery } = planAPI;
