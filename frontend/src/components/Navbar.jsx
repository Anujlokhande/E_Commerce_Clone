import { RiCloseLine, RiShoppingCartFill } from "@remixicon/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const category = ["Clothes", "Electronics", "Furnitures", "Toys"];

const Navbar = () => {
  const navigate = useNavigate();
  const [cartSlide, setCartSlide] = useState(true);
  return (
    <div className="w-full h-16 border-b-2 border-gray-300/60 p-5 flex justify-between items-center sticky top-0 bg-white">
      <div className="flex items-center gap-4 relative">
        <span className="text-xl text-black font-semibold">Shopi</span>
        <p
          className="text-sm text-gray-600 cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          All
        </p>
        {category.map((cat) => (
          <p key={cat} className="text-gray-600 cursor-pointer">
            {cat}
          </p>
        ))}
      </div>
      <div className="flex justify-between items-center gap-4">
        <span className="text-gray-600 text-sm">userintheapp@test.com</span>
        <span
          className="cursor-pointer"
          onClick={() => {
            navigate("/my-orders");
          }}
        >
          My Orders
        </span>
        <span className="cursor-pointer">My Account</span>
        <span
          className="flex justify-center items-center gap-2 cursor-pointer "
          onClick={() => {
            setCartSlide(true);
          }}
        >
          <RiShoppingCartFill /> 0
        </span>
      </div>
      {cartSlide && (
        <div className="absolute right-0 top-16 min-h-screen border border-black rounded-xl bg-white w-[30%]">
          <div className="flex justify-between items-center p-6 border-b border-b-gray-300/60">
            <h3 className="text-2xl font-semibold">My Orders</h3>
            <RiCloseLine
              className="text-2xl font-semibold"
              onClick={() => {
                setCartSlide(false);
              }}
            />
          </div>
          <div className="flex justify-between items-center p-4 border-b border-b-gray-300/60">
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 rounded-md bg-amber-50"></div>
              <div className="flex flex-col justify-center items-start">
                <p className="text-sm font-light">
                  Classic Heather Gray Hoodie
                </p>
                <p className="font-medium">$69</p>
              </div>
            </div>
            <div>
              <RiCloseLine className="font-light" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
