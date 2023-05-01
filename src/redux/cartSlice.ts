import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItem, Product } from "../Types";

interface CartState {
  isCartOpen: boolean;
  cartItems: CartItem[];
}

const initialState: CartState = {
  isCartOpen: false,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    decreaseItem(state, action: PayloadAction<number>) {
      const index = state.cartItems.findIndex((c) => c.id == action.payload);
      if (index !== -1) {
        state.cartItems[index].quantity > 1
          ? state.cartItems[index].quantity--
          : state.cartItems.splice(index, 1);
      }
    },
    addItem(state, action: PayloadAction<Product>) {
      const index = state.cartItems.findIndex((c) => c.id == action.payload.id);
      if (index !== -1) {
        state.cartItems[index].quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      const index = state.cartItems.findIndex((c) => c.id == action.payload);
      state.cartItems.splice(index, 1);
    },
    setisCartOpen(state) {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const { addItem, decreaseItem, removeItem, setisCartOpen } =
  cartSlice.actions;
export default cartSlice.reducer;
