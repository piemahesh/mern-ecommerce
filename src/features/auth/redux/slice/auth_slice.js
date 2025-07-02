import { createSlice } from "@reduxjs/toolkit";
import { getCookie, resetCookie, setCookie } from "../../../../utils";

const initialState = {
  token: getCookie() || null,
  isAuthenticated: getCookie() ? true : false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticated: (state, action) => {
      console.log(action);
      const { token } = action.payload;
      state.isAuthenticated = true;
      state.token = token;
      setCookie(token);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      resetCookie();
    },
  },
  //   extraReducers: (builder) => {},
});

export const AuthReducer = AuthSlice.reducer;
export const { logout, setAuthenticated } = AuthSlice.actions;
