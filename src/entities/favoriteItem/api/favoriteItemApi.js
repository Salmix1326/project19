import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import DbOperations from "../../../shared/api/DbOperations";
const db = new DbOperations("favorites");

export const favoriteItemApi = createApi({
  reducerPath: "favoritesItemApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["FavoriteItem"],
  endpoints: (builder) => ({
    getUserFavorites: builder.query({
      async queryFn(userId) {
        try {
          const cart = await db.getFavoritesByUserId(userId);
          return { data: cart };
        } catch (error) {
          return { error: { message: error.message } };
        }
      },
      providesTags: ["FavoriteItem"],
    }),
    addToFavorites: builder.mutation({
      async queryFn({ userId, productId, product }) {
        try {
          let cart = await db.getFavoritesByUserId(userId);
          // Якщо carts/{userId} не існує — створити документ
          if (!cart || Object.keys(cart).length === 0) {
            cart = { [productId]: { ...product, quantity: 1 } };
            await db.setFavoriteByUserId(userId, cart);
            return { data: true };
          }
          await db.updateFavorites(userId, productId, {
            ...product,
          });
          return { data: true };
        } catch (error) {
          return { error: { message: error.message } };
        }
      },
      invalidatesTags: ["FavoriteItem"],
    }),
    removeFromFavorites: builder.mutation({
      async queryFn({ userId, productId }) {
        try {
          await db.removeFavorites(userId, productId);
          return { data: true };
        } catch (error) {
          return { error: { message: error.message } };
        }
      },
      invalidatesTags: ["FavoriteItem"],
    }),
  }),
});

export const {
  useGetUserFavoritesQuery,
  useAddToFavoritesMutation,
  useRemoveFromFavoritesMutation,
} = favoriteItemApi;
