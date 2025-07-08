import { IoCloseOutline } from "react-icons/io5";

export function OrderDetails({ isModal, onClose, order }) {
  if (!isModal) return;
  return (
    <>
      {order && (
        <section
          className={`fixed top-0 left-0  w-full h-dvh z-100 flex justify-end`}
        >
          <div
            className={`h-full bg-white lg:w-5/12 w-full sm:w-10/12 md:w-7/12 xl:w-4/12 pb-[4.3rem] duration-400 ${
              isModal ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center py-5 shadow-md px-5">
              <h1 className="font-semibold text-lg">Order Details</h1>
              <button
                onClick={onClose}
                className="text-3xl cursor-pointer hover:text-red-500"
              >
                <IoCloseOutline />
              </button>
            </div>
            <section className="overflow-y-auto h-full pt-5 pb-5 flex flex-col gap-3">
              <section className="px-5 flex flex-col gap-4 pb-5 text-sm">
                <div className="flex justify-between items-center">
                  <h1 className="font-medium">Order ID</h1>
                  <p>{order?._id}</p>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="font-medium">Order Date</h1>
                  <p>{order?.createdAt}</p>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="font-medium">Order Amount</h1>
                  <p>₹{order?.totalAmount}</p>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="font-medium">Payment Method</h1>
                  <p>{order?.paymentMethod}</p>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="font-medium">Payment Status</h1>
                  {order?.paymentStatus ? (
                    <p className="text-green">Paid</p>
                  ) : (
                    <>
                      {order?.orderStatus == "cancelled" ? (
                        <p className="text-red-500">Payment failed</p>
                      ) : (
                        <p className="text-red-500">Payment Not Paid</p>
                      )}
                    </>
                  )}
                </div>

                <div className="flex justify-between items-center">
                  <h1 className="font-medium">Order Status:</h1>
                  <p
                    className={`capitalize text-white px-3 py-1 rounded-full bg-amber-500 `}
                  >
                    {order?.orderStatus}
                  </p>
                </div>
              </section>
              <section className="px-5 text-sm flex flex-col gap-5 mb-5 ">
                <h1 className="font-semibold text-base underline underline-offset-2">
                  Products Details :
                </h1>
                <div>
                  <div className="flex justify-between mb-2 text-neutral-800">
                    <h6 className="underline underline-offset-2 w-3/12 ">
                      Name
                    </h6>
                    <h6 className="underline underline-offset-2 w-3/12 text-center">
                      Quantity
                    </h6>
                    <h6 className="underline underline-offset-2 w-3/12 text-end">
                      Price{" "}
                    </h6>
                    <h6 className="underline underline-offset-2 w-3/12 text-end">
                      Total{" "}
                    </h6>
                  </div>
                  <div className="w-full flex flex-col items-center gap-2">
                    {order?.products?.map((product, index) => {
                      const total = product?.quantity * Number(product?.price);
                      return (
                        <div
                          key={index}
                          className="flex justify-between items-center w-full gap-2  text-gray-500"
                        >
                          <p className="capitalize w-3/12 flex flex-wrap">
                            {product?.name}
                          </p>
                          <p className="w-3/12 text-center">
                            {product?.quantity}
                          </p>
                          <p className="w-3/12 text-end">₹{product?.price}</p>
                          <p className="w-3/12 text-end">
                            {" "}
                            ₹{isNaN(total) ? 0 : total}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
              <section className="px-5 text-sm flex flex-col gap-5">
                <h1 className="font-semibold text-base underline underline-offset-2">
                  Shipping Info :
                </h1>
                <div className="text-gray-500 capitalize flex flex-col gap-3">
                  <div className=" flex gap-2">
                    <span className="w-4/12 text-neutral-800">Name :</span>
                    <span className="w-8/12">
                      {order?.shippmentDetails?.name}
                    </span>
                  </div>
                  <div className=" flex gap-2">
                    <span className="w-4/12 text-neutral-800">Street :</span>
                    <span className="w-8/12">
                      {order?.shippmentDetails?.street}
                    </span>
                  </div>
                  <div className=" flex gap-2">
                    <span className="w-4/12 text-neutral-800">City :</span>
                    <span className="w-8/12">
                      {order?.shippmentDetails?.city}
                    </span>
                  </div>
                  <div className=" flex gap-2">
                    <span className="w-4/12 text-neutral-800">
                      Mobile Number :
                    </span>
                    <span className="w-8/12">
                      {order?.shippmentDetails?.mobileNumber}
                    </span>
                  </div>
                  <div className=" flex gap-2">
                    <span className="w-4/12 text-neutral-800">Pincode :</span>
                    <span className="w-8/12">
                      {order?.shippmentDetails?.pincode}
                    </span>
                  </div>
                </div>
              </section>
            </section>
          </div>
          <div
            onClick={onClose}
            className="bg-neut h-full w-full absolute -z-1 bg-black opacity-50 cursor-pointer"
          ></div>
        </section>
      )}
    </>
  );
}
