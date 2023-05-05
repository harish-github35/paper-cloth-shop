import { createSelector } from "@reduxjs/toolkit";
import { Category, Product } from "../Types";
import { RootState } from "../store";

export const cartItemQuantitySelector = createSelector(
  [(state: RootState) => state.cart.cartItems],
  (cartItems) => cartItems.reduce((a, c) => a + c.quantity, 0)
);

export const cartTotalSelector = createSelector(
  [(state: RootState) => state.cart.cartItems],
  (cartItems) => cartItems.reduce((a, c) => a + c.price * c.quantity, 0)
);

const categoriesSelector = (state: RootState) => state.shopData.categories;

export const categoryMapSelector = createSelector(
  [categoriesSelector],
  (categories: Category[]) =>
    categories.reduce((a, c) => {
      a[c.title] = c.items;
      console.log("im running again why");
      return a;
    }, {} as Record<string, Product[]>)
);

export const productsSelector = (categoryName: string) =>
  createSelector(
    [categoriesSelector],
    (categories) => categories.find((c) => c.title === categoryName)?.items
  );
