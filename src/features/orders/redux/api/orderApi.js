import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../../services";
import { getCookie } from "../../../../utils";

export const GetOrderAPI = createAsyncThunk("get", async () => {
  try {
    const response = await API.get("/order/get", {
      headers: {
        Authorization: `Bearer ${getCookie()}`,
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    return error;
  }
});
