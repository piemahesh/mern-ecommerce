import { createSlice } from "@reduxjs/toolkit";
import { GetCartProductDetailsAPI, MakeOrderAPI } from "../api";
import { getCartLocal, resetCartItem, setCartItem } from "../../../../utils";

const initialState = {
  data: [],
  isLoading: false,
  success: false,
  message: null,
  totalCartItems: getCartLocal().length,
  totalPrice: 0,
  localCartItems: getCartLocal(),
};

const CartSlice = createSlice({
  name: "cart-items",
  initialState,
  reducers: {
    manipulateCartQuantity: (state, action) => {
      const { _id, isInc = false } = action.payload;
      const updatedCart = state.data.map((prod) => {
        if (prod._id == _id) {
          const singlePrice = prod.price / prod.quantity;
          const quantity = isInc ? ++prod.quantity : --prod.quantity;
          return { ...prod, quantity, price: singlePrice * quantity };
        } else {
          return prod;
        }
      });
      state.data = updatedCart.filter((prod) => prod.quantity != 0);
      const localStoreData = state.data.map((prod) => ({
        _id: prod._id,
        quantity: prod.quantity,
      }));
      state.totalCartItems = localStoreData.length;
      state.totalPrice = state.data.reduce((p, c) => p + c.price, 0);
      setCartItem(localStoreData);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetCartProductDetailsAPI.pending, (state) => {
        state.isLoading = true;
        state.success = false;
      })
      .addCase(GetCartProductDetailsAPI.fulfilled, (state, action) => {
        const { data, success, message } = action.payload;
        const dbCart = data?.map((prod) => {
          const product = getCartLocal().find((p) => p._id == prod._id);

          return {
            ...prod,
            price: product.quantity * prod.price,
            quantity: product.quantity,
          };
        });
        state.data = dbCart;
        state.isLoading = false;
        state.success = success || true;
        state.message = message || "cart items fetched successfully";
        state.totalPrice = state.data.reduce((p, c) => p + c.price, 0);
      })
      .addCase(GetCartProductDetailsAPI.rejected, (state) => {
        state.isLoading = false;
        state.success = false;
        state.message = "something went wrong";
      })
      // make order
      .addCase(MakeOrderAPI.fulfilled, (state, action) => {
        const { success, message } = action.payload;
        state.success = success;
        state.message = message || "successfully place order";
        resetCartItem();
        state.data = [];
      })
      .addCase(MakeOrderAPI.rejected, (state, action) => {
        const { message } = action.payload;
        state.success = false;
        state.message = message;
      });
  },
});

export const CartReducer = CartSlice.reducer;
export const { manipulateCartQuantity } = CartSlice.actions;
