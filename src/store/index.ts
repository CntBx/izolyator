import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./api/productsApi";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
  },
  // Мидлвар обязателен для кэширования и инвалидации в RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
