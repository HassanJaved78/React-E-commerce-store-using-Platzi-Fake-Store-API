import { configureStore } from "@reduxjs/toolkit";

import cartReducer from '../features/cart/cartSlice';
import { productsApi } from "../features/api/productsApi";

export const store = configureStore({
    reducer: {
        // key: slice name, value: reducer function
        cart: cartReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },

    // Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query 
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(productsApi.middleware),
})