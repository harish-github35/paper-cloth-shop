import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
// import { CartItem, Product } from "../Types";

// export const addCartItem = (
//   cartItems: CartItem[],
//   product: Product
// ): CartItem[] => {
//   const existingItem = cartItems.find((c) => c.id === product.id);

//   if (existingItem) {
//     return cartItems.map((c) =>
//       c.id === product.id
//         ? {
//             ...c,
//             quantity: c.quantity + 1,
//           }
//         : c
//     );
//   }

//   return [...cartItems, { ...product, quantity: 1 }];
// };

// export const decreaseItemsFromCart = (
//   cartItems: CartItem[],
//   item: CartItem
// ): CartItem[] => {
//   return cartItems.map((c) =>
//     c.id === item.id ? { ...item, quantity: item.quantity - 1 } : c
//   );
// };

export const cartItemQuantitySelector = createSelector(
  (state: RootState) => state.cart.cartItems,
  (cartItems) => cartItems.reduce((a, c) => a + c.quantity, 0)
);

export const cartTotalSelector = createSelector(
  (state: RootState) => state.cart.cartItems,
  (cartItems) => cartItems.reduce((a, c) => a + c.price * c.quantity, 0)
);
