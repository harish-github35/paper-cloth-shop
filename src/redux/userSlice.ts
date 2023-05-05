import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserType } from "../Types";

interface UserState {
  currentUser: UserType | null;
}

const initialState: UserState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserType | null>) {
      state.currentUser = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
