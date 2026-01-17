import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/productsSlice";
import cartReducer from "./cart/cartSlice";
import orderReducer from "./order/orderSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});
