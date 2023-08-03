import { configureStore } from "@reduxjs/toolkit";
import cartItemSlice from "./cartItemSlice";

const store = configureStore({
  reducer: {
    item: cartItemSlice,
  },
});

export default store;
