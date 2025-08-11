import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

// RTK Query base API setup
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery(({baseUrl: ' https://api.escuelajs.co/api/v1/'})),
    endpoints: () => ({})
})