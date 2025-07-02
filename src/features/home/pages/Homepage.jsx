import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../auth";
import { FetchAllProductsAPI } from "../redux";
import { Products } from "./Products";
import { Navbar } from "../../shared";

export const Homepage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("hitted");
    dispatch(FetchAllProductsAPI());
  }, []);
  const logoutUser = () => {
    dispatch(logout());
  };
  return (
    <div>
      <Navbar />
      {/* <button onClick={logoutUser}>Logout</button> */}
      <section className="mt-4">
        <Products />
      </section>
    </div>
  );
};
