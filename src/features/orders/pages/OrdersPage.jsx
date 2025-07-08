import { useEffect, useState } from "react";
import { OrderDetails, OrderViews } from "../components";
import { useDispatch } from "react-redux";
import { GetOrderAPI } from "../redux";

export function OrdersPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetOrderAPI());
  }, []);

  return (
    <div>
      <h1 className="text-center font-semibold lg:text-3xl md:text-2xl sm:text-xl text-lg py-10 text-neutral-800">
        My Orders
      </h1>
      <OrderViews />
    </div>
  );
}
