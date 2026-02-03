import { createSlice } from "@reduxjs/toolkit";

export interface CartState {
  products: any[];
  orders: any[];
}

const initialState: CartState = {
  products: [],
  orders: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.products = [
        ...state.products.filter((el) => el.id !== action.payload),
      ];
    },
    completeOrder: (state, action) => {
      state.orders.push({
        house: action.payload.house,
        street: action.payload.street,
        products: state.products,
      });
      state.products = [];
    },
  },
});

export const { addProduct, removeProduct, completeOrder } = cartSlice.actions;

export default cartSlice.reducer;
