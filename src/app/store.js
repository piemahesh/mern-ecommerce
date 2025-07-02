import { configureStore } from "@reduxjs/toolkit";
import { AuthReducer, ProductReducer } from "../features";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    products: ProductReducer,
  },
});
