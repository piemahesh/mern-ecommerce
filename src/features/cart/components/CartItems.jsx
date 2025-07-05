import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartCard } from "./CartCard";
import { Alert } from "../../shared/components";
import { MakeOrderAPI } from "../redux";
import { getCartLocal } from "../../../utils";

export const CartItems = () => {
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);
  const { data, totalPrice, isLoading, success, message } = useSelector(
    (state) => state.cartItems
  );
  useEffect(() => {
    setIsModal(!success || false);
  }, [success]);
  if (isLoading) {
    return <div>loading....</div>;
  }
  if (!success) {
    return <div>{message}</div>;
  }
  const makeOrder = async () => {
    try {
      const res = await dispatch(MakeOrderAPI(data));
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isModal && (
        <Alert
          message={message}
          isOpen={isModal}
          onClose={() => setIsModal(false)}
        />
      )}
      <div className="space-y-7">
        {data?.map((item) => (
          <CartCard key={item._id} {...item} />
        ))}
        <div className="flex  items-center justify-between">
          <button
            onClick={makeOrder}
            className="border active:scale-95 p-2 px-4 rounded-3xl text-transparent bg-clip-text 
      from-slate-400 from-25% border-violet-600 to-violet-500 font-bold bg-gradient-to-br"
          >
            {" "}
            {`Buy now ${data?.length}`}
          </button>
          <div className="border active:scale-95 p-2 px-4 rounded-3xl bg-violet-500 text-white bg-gradient-to-br">{`Total price: ${totalPrice} Rs/-`}</div>
        </div>
      </div>
    </>
  );
};
