import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../../services";
import { getCookie } from "../../../../utils";

export const FetchAllProductsAPI = createAsyncThunk(
  "get-all-products",
  async () => {
    try {
      const response = await API.get("/product/get-all", {
        headers: {
          Authorization: `Bearer ${getCookie()}`,
        },
      });
      console.log(response);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);
