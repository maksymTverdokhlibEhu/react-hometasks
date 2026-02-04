import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { cartSlice } from "../../lib/state/reducers/cart.reducer";
import { createTestStore, type RootState } from "../../lib/state/store";

export function renderWithStore(
  ui: React.ReactElement,
  preloadedState?: Partial<RootState>,
) {
  const store = createTestStore(preloadedState);

  return {
    store,
    ...render(<Provider store={store}>{ui}</Provider>),
  };
}
