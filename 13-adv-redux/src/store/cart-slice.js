import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItem(state, action) {
      const newIitem = action.payload;
      const existingItem = state.items.find((item) => item.id === newIitem.id);

      if (!existingItem) {
        state.items.push({
          id: newIitem.id,
          quantity: 1,
          price: newIitem.price,
          totalPrice: newIitem.price,
          name: newIitem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newIitem.price;
      }

      state.totalQuantity++;
    },
    removeItem(state, action) {
      const existingItem = state.items.find((i) => i.id === action.payload);

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== existingItem.id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }

      state.totalQuantity--;
    },
  },
});

export default cartSlice;

export const cartActions = cartSlice.actions;
