import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const { token, isAuthenticated } = useSelector((state) => state.auth);
  console.log(token);
  if (!isAuthenticated) {
    return <Navigate to={"/login"} replace="/login" />;
  }
  return <Outlet />;
};
