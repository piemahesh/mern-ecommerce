import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../../services/API";
import { getCookie } from "../../../../utils";

export const GetCartProductDetailsAPI = createAsyncThunk(
  "/product/get-cart/details",
  async (data) => {
    try {
      const resp = await API.post(
        "/product/get-cart/details",
        {
          productIds: data,
        },
        {
          headers: {
            Authorization: `Bearer ${getCookie()}`,
          },
        }
      );

      return resp.data;
    } catch (err) {
      return err;
    }
  }
);

export const MakeOrderAPI = createAsyncThunk(
  "/order/create",
  async (data, thunkApi) => {
    try {
      const resp = await API.post(
        "/order/create",
        {
          carts: data,
        },
        {
          headers: {
            Authorization: `Bearer ${getCookie()}`,
          },
        }
      );
      return resp.data;
    } catch (err) {
      alert(err);
      return thunkApi.rejectWithValue(...err);
    }
  }
);
