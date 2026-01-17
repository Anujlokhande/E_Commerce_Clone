import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/productsSlice";
import cartReducer from "./cart/cartSlice";
import orderReducer from "./order/orderSlice";
import categoryReducer from "./category/categorySlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    order: orderReducer,
    category: categoryReducer,
  },
});
