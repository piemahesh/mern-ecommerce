import { useEffect, useState } from "react";
import { getCartLocal } from "../../../utils";
import { INITIAL_CART } from "../constant";
import { GetCartProductDetailsAPI } from "../redux/api/cartApi";
import { useDispatch } from "react-redux";
import { CartItems } from "../components";

export const CartPage = () => {
  const dispatch = useDispatch();
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const productIds = getCartLocal().map((prod) => prod._id);
    dispatch(GetCartProductDetailsAPI(productIds));
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <CartItems />
    </div>
  );
};
