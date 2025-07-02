import React from "react";
import { useSelector } from "react-redux";
import { CartCard } from "./CartCard";

export const CartItems = () => {
  const { data, isLoading, success, message } = useSelector(
    (state) => state.cartItems
  );
  if (isLoading) {
    return <div>loading....</div>;
  }
  if (!success) {
    return <div>{message}</div>;
  }
  return (
    <div className="space-y-7">
      {data.map((item) => (
        <CartCard key={item._id} {...item} />
      ))}
    </div>
  );
};
