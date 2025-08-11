import { configureStore } from "@reduxjs/toolkit";

import cartReducer from '../features/cart/cartSlice';
import { apiSlice } from "../features/api/apiSlice";

export const store = configureStore({
    reducer: {
        // key: slice name, value: reducer function
        cart: cartReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },

    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware().concat(apiSlice.middleware)
    )
})