import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../Types";

interface CategoriesState {
  categoriesMap: Record<string, Product[]> | null;
  isLoading: boolean;
}

const initialState: CategoriesState = {
  categoriesMap: null,
  isLoading: false,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<Record<string, Product[]>>) {
      state.categoriesMap = action.payload;
    },
    setisLoading(state) {
      state.isLoading = !state.isLoading;
    },
  },
});

export const { setCategories, setisLoading } = categoriesSlice.actions;
export default categoriesSlice.reducer;
