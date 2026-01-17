import {
  RiArrowRightSLine,
  RiCalendar2Line,
  RiShoppingBag4Line,
} from "@remixicon/react";

const MyOrders = () => {
  return (
    <div className="w-full max-h-screen">
      <div className="flex flex-col justify-center items-center gap-4 p-3">
        <p>My Orders</p>
        <div className="flex justify-center w-96 p-4 border border-black rounded-xl active:scale-110 transition-transform  ease-in duration-75">
          <div className="grid grid-cols-2 w-full cursor-pointer ">
            <div className="flex flex-col items-start gap-3">
              <span className="flex justify-center items-center gap-2">
                <RiCalendar2Line /> 01.02.23
              </span>
              <span className="flex justify-center items-center gap-2">
                <RiShoppingBag4Line /> 0
              </span>
            </div>
            <div className="flex justify-center items-center ">
              <p className="text-xl font-bold">$90</p>
              <RiArrowRightSLine className="text-xl font-bold " />
            </div>
          </div>
        </div>
        <div className="flex justify-center w-96 p-4 border-2 border-black rounded-xl active:scale-110 transition-transform  ease-in duration-75">
          <div className="grid grid-cols-2 w-full cursor-pointer ">
            <div className="flex flex-col items-start gap-3">
              <span className="flex justify-center items-center gap-2">
                <RiCalendar2Line /> 01.02.23
              </span>
              <span className="flex justify-center items-center gap-2">
                <RiShoppingBag4Line /> 0
              </span>
            </div>
            <div className="flex justify-center items-center ">
              <p className="text-xl font-bold">$90</p>
              <RiArrowRightSLine className="text-xl font-bold " />
            </div>
          </div>
        </div>
        <div className="flex justify-center w-96 p-4 border-2 border-black rounded-xl active:scale-110 transition-transform  ease-in duration-75">
          <div className="grid grid-cols-2 w-full cursor-pointer ">
            <div className="flex flex-col items-start gap-3">
              <span className="flex justify-center items-center gap-2">
                <RiCalendar2Line /> 01.02.23
              </span>
              <span className="flex justify-center items-center gap-2">
                <RiShoppingBag4Line /> 0
              </span>
            </div>
            <div className="flex justify-center items-center ">
              <p className="text-xl font-bold">$90</p>
              <RiArrowRightSLine className="text-xl font-bold " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
