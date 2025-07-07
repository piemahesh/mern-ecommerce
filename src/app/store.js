import { configureStore } from "@reduxjs/toolkit";
import {
  AuthReducer,
  CartReducer,
  OrderReducer,
  ProductReducer,
} from "../features";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    products: ProductReducer,
    cartItems: CartReducer,
    orders: OrderReducer,
  },
});
