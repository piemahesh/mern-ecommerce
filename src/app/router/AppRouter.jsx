import { createBrowserRouter } from "react-router-dom";
import {
  LoginPage,
  RegisterPage,
  Homepage,
  OrdersPage,
  CartPage,
} from "../../features";
import { ProtectedRoute } from "../dispatcher/ProtectedRoute";
import { PublicRoute } from "../dispatcher/PublicRoute";

export const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoute />,
    children: [
      { path: "/", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      { path: "/home", element: <Homepage /> },
      { path: "/orders", element: <OrdersPage /> },
      { path: "/cart", element: <CartPage /> },
    ],
  },
]);
