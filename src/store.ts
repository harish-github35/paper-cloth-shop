import { configureStore } from "@reduxjs/toolkit";
import cart from "./redux/cartSlice";
import shopData from "./redux/categoriesSlice";
import user from "./redux/userSlice";

export const store = configureStore({
  reducer: {
    user,
    cart,
    shopData,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: ["user.currentUser"],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
