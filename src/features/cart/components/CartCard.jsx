import { useDispatch } from "react-redux";
import { manipulateCartQuantity } from "../redux";

export const CartCard = (item) => {
  const { _id } = item;
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(manipulateCartQuantity({ _id, isInc: true }));
  };
  const handleDecreament = () => {
    dispatch(manipulateCartQuantity({ _id }));
  };
  return (
    <div
      key={item._id}
      className=" flex center gap-4 border p-4 rounded shadow-sm"
    >
      <img src={item.image} alt={item.name} className="w-20 h-20 rounded" />
      <div>
        <h2 className="text-lg font-medium">{item.name}</h2>
        <p className="text-gray-600">Price: ${item.price}</p>
        <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
        <div className="flex items-center mt-2 space-x-2 font-bold">
          <button
            onClick={handleDecreament}
            className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
          >
            {" "}
            -{" "}
          </button>
          <button
            onClick={handleIncrement}
            className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
          >
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
  );
};
