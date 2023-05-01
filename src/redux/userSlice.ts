import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "firebase/auth";

interface UserState {
  currentUser: UserInfo | null;
}

const initialState: UserState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserInfo | null>) {
      state.currentUser = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
