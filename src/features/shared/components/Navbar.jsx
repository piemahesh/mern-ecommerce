import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold">Offmarket</div>
        <ul className="flex space-x-4">
          <li className="hover:text-gray-200 cursor-pointer">Home</li>
          <li className="hover:text-gray-200 cursor-pointer">You</li>
          <Link to="/cart" className="hover:text-gray-200 cursor-pointer">
            Cart
          </Link>
          <li className="hover:text-gray-200 cursor-pointer">Wishlist</li>
          <Link to="/orders" className="hover:text-gray-200 cursor-pointer">
            Order
          </Link>
        </ul>
      </div>
    </nav>
  );
};
