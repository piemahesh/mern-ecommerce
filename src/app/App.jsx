import React from "react";
import { RouterProvider } from "react-router-dom";
import { appRoutes } from "./router/AppRouter";
import { Provider } from "react-redux";
import { store } from "./store";

export const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={appRoutes} />
    </Provider>
  );
};
