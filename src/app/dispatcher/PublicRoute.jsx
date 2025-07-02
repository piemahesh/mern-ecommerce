import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const PublicRoute = () => {
  const { token, isAuthenticated } = useSelector((state) => state.auth);
  // console.log(token);
  // console.log(isAuthenticated);
  if (!isAuthenticated) {
    return <Outlet />;
  }
  return <Navigate to={"/home"} />;
};
