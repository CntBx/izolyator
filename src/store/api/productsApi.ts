import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ProductDetailResponse, ProductShort } from "./types";

export const productsApi = createApi({
  reducerPath: "productsApi",
  // Указываем базовый IP сервера вашего бэкендера
  baseQuery: fetchBaseQuery({ baseUrl: "http://185.180.230.243/mosizolyator_api/" }),
  endpoints: (builder) => ({
    // 1. Запрос на получение всех продуктов
    getProducts: builder.query<ProductShort[], void>({
      query: () => "products/",
    }),
    // 2. Запрос на получение деталей конкретного ввода по ID
    getProductById: builder.query<ProductDetailResponse, number>({
      // FastAPI принимает id в пути и дублирует query-параметром, как вы указали
      query: (id) => `products/${id}/?product_id=${id}`,
    }),
  }),
});

// Экспортируем автогенерируемые React-хуки
export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;
