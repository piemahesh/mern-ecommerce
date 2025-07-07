import { useEffect, useState } from "react";
import { OrderDetails } from "../components";
import { useDispatch } from "react-redux";
import { GetOrderAPI } from "../redux";

export function OrdersPage() {
  const dispatch = useDispatch();
  const [id, setID] = useState("");

  useEffect(() => {
    dispatch(GetOrderAPI());
  }, []);
  const [orders, setOrders] = useState([]);
  // const [orders, setOrders] = useState([
  //   {
  //     _id: "order_001",
  //     products: [
  //       {
  //         name: "Brownie",
  //         quantity: 4,
  //         price: 59,
  //         image: "/images/brownie.jpg",
  //       },
  //     ],
  //     paymentStatus: false,
  //     orderStatus: "pending",
  //     totalAmount: 236,
  //     shippingAddress: {
  //       name: "Naveen Kumar",
  //       street: "12 MG Road",
  //       city: "Chennai",
  //       mobileNumber: "9876543210",
  //       pincode: "600001",
  //     },
  //     paymentMethod: "UPI",
  //     createdAt: Date.now(),
  //   },
  //   {
  //     _id: "order_002",
  //     products: [
  //       {
  //         name: "Veg Pizza",
  //         quantity: 2,
  //         price: 299,
  //         image: "/images/veg-pizza.jpg",
  //       },
  //       { name: "Coke", quantity: 2, price: 50, image: "/images/coke.jpg" },
  //     ],
  //     paymentStatus: true,
  //     orderStatus: "delivered",
  //     totalAmount: 698,
  //     shippingAddress: {
  //       name: "Ananya Sharma",
  //       street: "45 Park Street",
  //       city: "Kolkata",
  //       mobileNumber: "9123456780",
  //       pincode: "700016",
  //     },
  //     paymentMethod: "UPI",
  //     createdAt: Date.now(),
  //   },
  //   {
  //     _id: "order_003",
  //     products: [
  //       {
  //         name: "Pasta Alfredo",
  //         quantity: 1,
  //         price: 249,
  //         image: "/images/pasta.jpg",
  //       },
  //     ],
  //     paymentStatus: false,
  //     orderStatus: "pending",
  //     totalAmount: 249,
  //     shippingAddress: {
  //       name: "Rahul Mehta",
  //       street: "22 Residency Road",
  //       city: "Bengaluru",
  //       mobileNumber: "9988776655",
  //       pincode: "560025",
  //     },
  //     paymentMethod: "UPI",
  //     createdAt: Date.now(),
  //   },
  //   {
  //     _id: "order_004",
  //     products: [
  //       {
  //         name: "Cheese Burger",
  //         quantity: 3,
  //         price: 149,
  //         image: "/images/burger.jpg",
  //       },
  //     ],
  //     paymentStatus: true,
  //     orderStatus: "shipped",
  //     totalAmount: 447,
  //     shippingAddress: {
  //       name: "Sanya Gupta",
  //       street: "7 Connaught Place",
  //       city: "Delhi",
  //       mobileNumber: "9876543211",
  //       pincode: "110001",
  //     },
  //     paymentMethod: "Debit Card",
  //     createdAt: Date.now(),
  //   },
  //   {
  //     _id: "order_005",
  //     products: [
  //       {
  //         name: "Paneer Roll",
  //         quantity: 2,
  //         price: 99,
  //         image: "/images/paneer-roll.jpg",
  //       },
  //       { name: "Sprite", quantity: 1, price: 50, image: "/images/sprite.jpg" },
  //     ],
  //     paymentStatus: false,
  //     orderStatus: "pending",
  //     totalAmount: 248,
  //     shippingAddress: {
  //       name: "Kiran Raj",
  //       street: "88 Banjara Hills",
  //       city: "Hyderabad",
  //       mobileNumber: "9012345678",
  //       pincode: "500034",
  //     },
  //     paymentMethod: "UPI",
  //     createdAt: Date.now(),
  //   },
  // ]);

  const getFormatDate = (dateCode) => {
    const date = new Date(dateCode);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };

  return (
    <div>
      <h1 className="text-center font-semibold lg:text-3xl md:text-2xl sm:text-xl text-lg py-10 text-neutral-800">
        My Orders
      </h1>
      <section className=" lg:px-20 xl:container mx-auto 2xl:px-52 lg:mb-50 mb-30 ">
        <div className="overflow-x-auto">
          <div className="min-w-[850px] ">
            <div className="flex py-6 bg-green text-white gap-5 xl:text-base text-sm px-5 bg-indigo-600">
              <p className="w-3/12 text-center font-medium ">Order ID</p>
              <p className="w-2/12 text-center font-medium">Order Date</p>
              <p className="w-3/12 text-center font-medium">Order Status</p>
              <p className="w-2/12 text-center font-medium">Order Price</p>
              <p className="w-2/12 text-center font-medium">Show Details</p>
            </div>
            <div className="flex flex-col">
              {orders.length > 0 ? (
                <>
                  {orders.map((order, index) => {
                    return (
                      <div
                        key={index}
                        className="flex py-5 border-b border-gray-200  items-center gap-5 xl:text-sm text-xs hover:bg-gray-50 px-5 "
                      >
                        <p className="w-3/12  text-center">{order?._id}</p>
                        <p className="w-2/12 text-center">
                          {getFormatDate(order?.createdAt)}
                        </p>

                        <div className="w-3/12  gap-2 flex justify-center">
                          <p
                            className={`w-6/12 relative uppercase flex justify-center py-2 items-center text-white px-2 rounded-full bg-amber-500`}
                          >
                            {order?.orderStatus}
                          </p>
                        </div>

                        <p className="w-2/12 text-center">
                          ₹{order?.totalAmount}
                        </p>
                        <div className="w-2/12 flex justify-center items-center">
                          <button
                            onClick={() => {
                              setID(order?._id);
                            }}
                            className="bg-gray-500 text-white rounded-full px-3 py-2 max-w-max cursor-pointer"
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : (
                <div className="flex justify-center items-center h-62">
                  <div className="text-2xl font-semibold text-gray-300">
                    Your Order Empty
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {id && <OrderDetails orders={orders} id={id} closerHandler={setID} />}
    </div>
  );
}
