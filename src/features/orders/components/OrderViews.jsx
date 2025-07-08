import { useSelector } from "react-redux";
import { OrderDetails } from "./OrderDetails";
import { useState } from "react";

export const OrderViews = () => {
  const { data, isLoading, success, message } = useSelector(
    (state) => state.orders
  );
  const [order, setOrder] = useState(null);

  if (isLoading) {
    return <div>loading..</div>;
  }
  if (!success) {
    return <div>{message}</div>;
  }
  const getFormatDate = (dateCode) => {
    const date = new Date(dateCode);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };
  return (
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
            {data.length > 0 ? (
              <>
                {data.map((order, index) => {
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
                          {order?.orderStatus || "status"}
                        </p>
                      </div>

                      <p className="w-2/12 text-center">
                        ₹{order?.products.reduce((p, c) => p + c.price, 0)}
                      </p>
                      <div className="w-2/12 flex justify-center items-center">
                        <button
                          onClick={() => {
                            setOrder(order);
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
      {order && (
        <OrderDetails
          isModal={order}
          onClose={() => setOrder(null)}
          order={order}
        />
      )}
    </section>
  );
};
