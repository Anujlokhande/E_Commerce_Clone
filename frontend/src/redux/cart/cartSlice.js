import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.images?.[0],
          quantity: 1,
        });
      }
    },

    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },

    increaseQty: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQty: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (!item) return;

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter((i) => i.id !== id);
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },

    calculateTotals: (state) => {
      let items = 0;
      let price = 0;

      state.items.forEach((item) => {
        items += item.quantity;
        price += item.quantity * item.price;
      });

      state.totalItems = items;
      state.totalPrice = price;
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseQty,
  decreaseQty,
  clearCart,
  calculateTotals,
} = cartSlice.actions;

export default cartSlice.reducer;
