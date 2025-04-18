import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const params = {
  _limit: 4,
  _sort: "rating",
  _order: "desc",
};

export const rtkApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: _API_ }),
  endpoints: (build) => ({
    getPizzas: build.query({
      query: () => ({
        url: "/pizzas",
        params: params,
      }),
    }),
    getRolls: build.query({
      query: () => ({
        url: "/rolls",
        params: params,
      }),
    }),
    getOthers: build.query({
      query: () => ({
        url: "/other",
        params: params,
      }),
    }),
  }),
});

export const useGetPizzas = rtkApi.useGetPizzasQuery;
export const useGetRolls = rtkApi.useGetRollsQuery;
export const useGetOthers = rtkApi.useGetOthersQuery;
