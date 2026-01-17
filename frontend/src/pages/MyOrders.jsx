import {
  RiArrowRightSLine,
  RiCalendar2Line,
  RiShoppingBag4Line,
} from "@remixicon/react";
import { useSelector } from "react-redux";
import { redirect, useNavigate } from "react-router-dom";
import MyOrder from "./MyOrder";

const MyOrders = () => {
  const { orders } = useSelector((state) => state.order);
  // console.log(orders);

  const navigate = useNavigate();
  return (
    <div className="w-full max-h-screen">
      <div className="flex flex-col justify-center items-center gap-4 p-3">
        <p>My Orders</p>
        {orders.length == 0 ? (
          <p>No Orders</p>
        ) : (
          <>
            {orders.map((order, idx) => (
              <div
                key={idx}
                className="flex justify-center w-96 p-4 border border-gray-300 rounded-xl active:scale-110 transition-transform  ease-in duration-75"
                onClick={() => {
                  navigate(`/my-order/${order.id}`);
                }}
              >
                <div className="grid grid-cols-2 w-full cursor-pointer ">
                  <div className="flex flex-col items-start gap-3">
                    <span className="flex justify-center items-center gap-2">
                      <RiCalendar2Line /> {order.id}
                    </span>
                    <span className="flex justify-center items-center gap-2">
                      <RiShoppingBag4Line /> {order.totalItems}
                    </span>
                  </div>
                  <div className="flex justify-center items-center ">
                    <p className="text-xl font-bold">${order.totalPrice}</p>
                    <RiArrowRightSLine className="text-xl font-bold " />
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
