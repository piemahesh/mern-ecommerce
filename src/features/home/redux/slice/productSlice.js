import { createSlice } from "@reduxjs/toolkit";
import { FetchAllProductsAPI } from "../api";

const initialState = {
  data: [],
  isLoading: false,
  success: false,
  message: null,
};

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchAllProductsAPI.pending, (state) => {
        state.isLoading = true;
        state.success = false;
      })
      .addCase(FetchAllProductsAPI.fulfilled, (state, action) => {
        state.isLoading = false;
        const { data, success, message } = action.payload;
        state.success = success || true;
        state.data = data;
        state.message = message || "all products fetched successfully";
      })
      .addCase(FetchAllProductsAPI.rejected, (state) => {
        state.isLoading = false;
        state.success = false;
      });
  },
});

export const ProductReducer = ProductSlice.reducer;
