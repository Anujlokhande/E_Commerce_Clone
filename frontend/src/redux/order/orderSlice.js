import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      const order = action.payload;
      state.orders.push(order);
    },
    removeOrder: (state, action) => {
      const id = action.payload;
      state.orders = state.orders.filter((order) => order.id !== id);
    },
  },
});

export const { addOrder, removeOrder } = orderSlice.actions;
export default orderSlice.reducer;
