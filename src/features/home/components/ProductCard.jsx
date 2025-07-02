import { addSingleProductToCart, manipulateQuantityById } from "../../../utils";

export const ProductCard = ({
  name,
  price,
  discount,
  discription,
  image,
  _id,
}) => {
  const handleAddToCart = (productId) => {
    addSingleProductToCart({ _id: productId });
  };
  const handleIncrement = (productId) => {
    console.log(productId);
    manipulateQuantityById(productId, false);
  };

  return (
    <div className="max-w-sm rounded-2xl shadow-md overflow-hidden border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300">
      <img
        src={image}
        alt={name}
        className="h-60 w-full object-cover object-center"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 truncate">{name}</h2>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{discription}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-indigo-600">₹{price}</span>
          {discount > 0 && (
            <span className="text-sm text-red-500 bg-red-100 px-2 py-0.5 rounded-full">
              {discount}% OFF
            </span>
          )}
        </div>
        <div className="flex gap-1 ">
          <button
            onClick={() => handleAddToCart(_id)}
            className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
          >
            Add to Cart
          </button>
          <button
            onClick={() => handleIncrement(_id)}
            className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
          >
            increment
          </button>
        </div>
      </div>
    </div>
  );
};
