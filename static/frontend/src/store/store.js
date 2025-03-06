import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import { itemsApi } from "../api/itemsApi";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [itemsApi.reducerPath]: itemsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(itemsApi.middleware),
});
