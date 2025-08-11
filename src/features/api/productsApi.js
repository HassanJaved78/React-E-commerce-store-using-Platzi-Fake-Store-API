import { apiSlice } from "./apiSlice";

// RTK Query endpoint for products

export const productsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // get all products
        getproducts: builder.query({
            query: () => 'products'
        })
    })
})

export const { useGetProductsQuery } = productsApi;