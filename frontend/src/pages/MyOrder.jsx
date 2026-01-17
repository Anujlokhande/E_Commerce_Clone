import { RiArrowLeftSLine } from "@remixicon/react";
import React from "react";

const MyOrder = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 p-3">
      <div className="flex justify-center items-center gap-7">
        <RiArrowLeftSLine />
        <p>My Orders</p>
      </div>
      <div>
        <div className="w-96 flex justify-between items-center border p-4 border-black rounded-lg">
          <div className="flex items-start gap-2">
            <div className="bg-gray-400 w-20 h-20 rounded-lg"></div>
            <div>
              <p>Classic Red Jogger</p>
              <p>$90</p>
              <p>1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
