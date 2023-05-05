import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Category } from "../Types";

interface CategoriesState {
  categories: Category[];
  isLoading: boolean;
}

const initialState: CategoriesState = {
  categories: [],
  isLoading: false,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<Category[]>) {
      state.categories = action.payload;
    },
    setisLoading(state) {
      state.isLoading = !state.isLoading;
    },
  },
});

export const { setCategories, setisLoading } = categoriesSlice.actions;
export default categoriesSlice.reducer;
