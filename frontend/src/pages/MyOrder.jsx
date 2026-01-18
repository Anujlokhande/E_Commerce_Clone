import { RiArrowLeftSLine } from "@remixicon/react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const MyOrder = () => {
  const { id } = useParams();
  const { orders } = useSelector((state) => state.order);
  const order = orders.find((o) => String(o.id) === String(id));
  // console.log(order);

  const navigate = useNavigate();
  if (!order) {
    return (
      <div className="flex flex-col justify-center items-center gap-4 p-3 min-h-screen">
        <p className="text-lg font-semibold">Order not found</p>
        <button
          onClick={() => navigate("/my-orders")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Back to Orders
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4 p-3">
      <div className="flex justify-center items-center gap-7">
        <RiArrowLeftSLine
          className="cursor-pointer"
          onClick={() => {
            navigate("/my-orders");
          }}
        />
        <p>My Orders</p>
      </div>
      <div className="w-full">
        {order.orderItems.map((o, idx) => (
          <div key={idx} className="flex justify-center mb-4">
            <div className="w-96 flex justify-between items-center border border-gray-300 p-4 rounded-lg hover:shadow-md transition">
              <div className="flex items-start gap-3 flex-1">
                <div className="bg-gray-100 w-20 h-20 rounded-lg overflow-hidden shrink-0">
                  <img
                    src={o.image}
                    alt={o.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-light line-clamp-2">{o.title}</p>
                  <p className="text-sm font-semibold mt-1">${o.price}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Qty: {o.quantity}
                  </p>
                </div>
              </div>
              <div className="text-right ml-2">
                <p className="text-sm font-semibold">
                  ${(o.price * o.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrder;
