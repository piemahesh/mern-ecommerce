import { createSlice } from "@reduxjs/toolkit";
import { GetOrderAPI } from "../api";

const initialState = {
  data: [],
  isLoading: false,
  success: false,
  message: null,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetOrderAPI.pending, (state) => {
        state.isLoading = true;
        state.success = false;
      })
      .addCase(GetOrderAPI.fulfilled, (state, action) => {
        const { data, success, message } = action.payload;
        state.isLoading = false;
        state.data = data;
        state.success = success || true;
        state.message = message || "get success";
      })
      .addCase(GetOrderAPI.rejected, (state) => {
        state.isLoading = false;
        state.message = "failed to get data";
        state.success = false;
      });
  },
});

export const OrderReducer = orderSlice.reducer;
