import { baseApi } from "../api/baseApi";

export const nurseryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getNurseries: builder.query({
      query: () => ({
        url: "/nursery",
        method: "GET",
      }),
    }),
    createNursery: builder.mutation({
      query: (nursery) => ({
        url: "/create-nursery",
        method: "POST",
        body: nursery,
      }),
    }),
  }),
});


export const { useGetNurseriesQuery, useCreateNurseryMutation } = nurseryApi;
