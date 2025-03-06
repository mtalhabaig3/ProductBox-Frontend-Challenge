import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const itemsApi = createApi({
  reducerPath: "itemsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getItems: builder.query({
      query: () => "/items",
    }),
    addItem: builder.mutation({
      query: (newItem) => ({
        url: "/items",
        method: "POST",
        body: newItem,
      }),
    }),
  }),
});

export const { useGetItemsQuery, useAddItemMutation } = itemsApi;
