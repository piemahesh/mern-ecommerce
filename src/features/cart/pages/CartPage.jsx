import { useEffect, useState } from "react";
import { getCartLocal } from "../../../utils";
import { INITIAL_CART } from "../constant";
import { GetCartProductDetailsAPI } from "../redux/api/cartApi";

export const CartPage = () => {
  const [cartData, setCartData] = useState([]);
  const fetchProducts = async () => {
    const cartItems = getCartLocal().map((prod) => prod._id);
    console.log(cartItems);
    const { data } = await GetCartProductDetailsAPI(cartItems);

    const dbCart = data?.map((prod) => {
      const product = getCartLocal().find((p) => p._id == prod._id);
      return {
        ...prod,
        price: product.quantity * prod.price,
        quantity: product.quantity,
      };
    });
    console.log(dbCart);
    setCartData(dbCart);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="space-y-7">
        {cartData.map((item) => (
          <div
            key={item._id}
            className=" flex center gap-4 border p-4 rounded shadow-sm"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 rounded"
            />
            <div>
              <h2 className="text-lg font-medium">{item.name}</h2>
              <p className="text-gray-600">Price: ${item.price}</p>
              <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
              <div className="flex items-center mt-2 space-x-2 font-bold">
                <button className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400">
                  {" "}
                  -{" "}
                </button>
                <button className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400">
                  {" "}
                  +
                </button>
              </div>
              <div className="flex space-x-2 mt-2">
                <button className="px-4 py-1.5 rounded bg-red-500 text-white hover:bg-red-600">
                  delete
                </button>
                <button className="px-4 py-1.5 rounded bg-blue-500 text-white hover:bg-blue-600">
                  save for later
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
