import { RiCloseLine, RiShoppingCartFill, RiMenu3Line } from "@remixicon/react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  calculateTotals,
  clearCart,
  decreaseQty,
  increaseQty,
  removeItem,
} from "../redux/cart/cartSlice";
import { addOrder } from "../redux/order/orderSlice";
import { setCategory } from "../redux/category/categorySlice";

import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react";

const category = ["Clothe", "Electronics", "Furniture", "Toy"];

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cartSlide, setCartSlide] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const { items, totalItems, totalPrice } = useSelector((state) => state.cart);

  const { user } = useUser();

  const handleRemove = (id) => {
    dispatch(removeItem(id));
    dispatch(calculateTotals());
  };

  const handleIncrease = (id) => {
    dispatch(increaseQty(id));
    dispatch(calculateTotals());
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQty(id));
    dispatch(calculateTotals());
  };

  const handleCheckout = () => {
    const newOrder = {
      id: Date.now(),
      orderItems: items,
      totalItems,
      totalPrice: totalPrice,
      date: new Date().toLocaleDateString(),
    };
    dispatch(addOrder(newOrder));
    dispatch(clearCart());
    cartSlide(false);
    navigate("/my-orders");
  };

  return (
    <div className="w-full h-16 border-b-2 border-gray-300/60 p-5 flex justify-between items-center sticky top-0 bg-white">
      <div className="flex items-center gap-4 relative">
        <span
          className="text-xl hidden lg:flex text-black font-semibold cursor-pointer "
          onClick={() => {
            dispatch(setCategory("All"));
          }}
        >
          Shopi
        </span>

        <p
          className="hidden md:block text-sm text-gray-600 cursor-pointer"
          onClick={() => {
            dispatch(setCategory("All"));
            navigate("/");
          }}
        >
          All
        </p>

        {category.map((cat) => (
          <p
            key={cat}
            className="hidden md:block text-gray-600 cursor-pointer"
            onClick={() => dispatch(setCategory(cat))}
          >
            {cat}
          </p>
        ))}

        <div className="md:hidden relative">
          <RiMenu3Line
            className="text-2xl cursor-pointer"
            onClick={() => setMobileMenu(!mobileMenu)}
          />

          {mobileMenu && (
            <div className="absolute top-10 left-0 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
              <div className="flex flex-col p-4 gap-3">
                <p
                  className="text-sm text-gray-600 cursor-pointer hover:text-black"
                  onClick={() => {
                    dispatch(setCategory("All"));
                    navigate("/");
                    setMobileMenu(false);
                  }}
                >
                  All
                </p>
                {category.map((cat) => (
                  <p
                    key={cat}
                    className="text-sm text-gray-600 cursor-pointer hover:text-black"
                    onClick={() => {
                      dispatch(setCategory(cat));
                      setMobileMenu(false);
                    }}
                  >
                    {cat}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <SignedOut>
        <button
          className="text-gray-600 text-sm cursor-pointer"
          onClick={() => navigate("/sign-in")}
        >
          Sign In
        </button>
      </SignedOut>

      <SignedIn>
        <div className="flex justify-between items-center gap-4">
          <span className=" hidden md:block text-gray-600 text-sm">
            {user?.primaryEmailAddress?.emailAddress}
          </span>

          <span
            className="cursor-pointer"
            onClick={() => navigate("/my-orders")}
          >
            My Orders
          </span>

          <span className="flex justify-center items-center gap-2 cursor-pointer">
            <RiShoppingCartFill onClick={() => setCartSlide(true)} />
            {totalItems}
          </span>

          <UserButton />
        </div>

        {/* <div className="md:hidden">
          <UserButton />
        </div> */}
      </SignedIn>

      {cartSlide && (
        <div className="absolute right-0 top-16 min-h-screen border border-black rounded-xl bg-white w-[30%]">
          <div className="flex justify-between items-center p-6 border-b border-gray-300/60">
            <h3 className="text-2xl font-semibold">My Orders</h3>
            <RiCloseLine
              className="text-2xl font-semibold"
              onClick={() => setCartSlide(false)}
            />
          </div>

          <div className="flex flex-col justify-between">
            {items.length === 0 ? (
              <p className="p-4">No Items In The Cart</p>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center p-4 border-b border-gray-300/60"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-20 w-20 bg-amber-50">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="contain rounded-md"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm font-light">{item.title}</p>
                      <p className="font-medium">${item.price}</p>

                      <div className="flex items-center gap-2 mt-1">
                        <button onClick={() => handleDecrease(item.id)}>
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => handleIncrease(item.id)}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <RiCloseLine
                    className="cursor-pointer"
                    onClick={() => handleRemove(item.id)}
                  />
                </div>
              ))
            )}

            <div className="p-4">
              <div className="p-4 flex justify-between font-medium">
                <span>Total:</span>
                <span>${totalPrice ? totalPrice : 0}</span>
              </div>

              <button
                className="w-full border rounded-xl bg-gray-500 text-white h-10"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
