import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../../services/API";

export const GetCartProductDetailsAPI = createAsyncThunk(
  "/product/get-cart/details",
  async (data) => {
    try {
      const resp = await API.post("/product/get-cart/details", {
        productIds: data,
      });

      return resp.data;
    } catch (err) {
      return err;
    }
  }
);
