import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./reducers/cart.reducer";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export const createTestStore = (preloadedState?: Partial<RootState>) =>
  configureStore({
    reducer: {
      cart: cartSlice.reducer,
    },
    preloadedState,
  });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
