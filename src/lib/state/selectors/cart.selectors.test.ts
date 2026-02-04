import {
  allProductsCountSelector,
  productCountSelector,
  allProductsSortedSelector,
} from "./cart.selectors";

const state: any = {
  cart: {
    products: [
      { id: "1", title: "Pizza" },
      { id: "1", title: "Pizza" },
      { id: "2", title: "Burger" },
    ],
  },
};

describe("cart selectors", () => {
  test("allProductsCountSelector", () => {
    expect(allProductsCountSelector(state)).toBe(3);
  });

  test("productCountSelector", () => {
    const selector = productCountSelector("1");
    expect(selector(state)).toBe(2);
  });

  test("allProductsSortedSelector returns unique products", () => {
    const result = allProductsSortedSelector(state);

    expect(result).toHaveLength(2);
    expect(result.map((p) => p.id)).toEqual(["1", "2"]);
  });
});
