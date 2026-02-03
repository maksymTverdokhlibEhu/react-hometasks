import { createSelector } from "reselect";
import type { RootState } from "../store";

export const productsSelector = (state: RootState) => state.cart.products;

export const allProductsSortedSelector = createSelector(
  [productsSelector],
  (products) => {
    const idSet = new Set();
    return products.filter((el) => {
      if (idSet.has(el.id)) return false;
      idSet.add(el.id);
      return true;
    });
  },
);

export const productCountSelector = (id: string) =>
  createSelector(
    [productsSelector],
    (products) => products.filter((item) => item.id === id).length,
  );

export const allProductsCountSelector = createSelector(
  [productsSelector],
  (products) => products.length,
);
