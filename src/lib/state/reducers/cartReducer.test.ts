import reducer, { addProduct, removeProduct, completeOrder } from "./cart.reducer";

describe("cartSlice reducer", () => {
  const product = { id: "1", title: "Pizza" };

  test("should return initial state", () => {
    expect(reducer(undefined, { type: "unknown" })).toEqual({
      products: [],
      orders: [],
    });
  });

  test("should add product", () => {
    const state = reducer(undefined, addProduct(product));

    expect(state.products).toHaveLength(1);
    expect(state.products[0]).toEqual(product);
  });

  test("should remove product by id", () => {
    const initialState = {
      products: [product],
      orders: [],
    };

    const state = reducer(initialState, removeProduct("1"));

    expect(state.products).toHaveLength(0);
  });

  test("should complete order and clear products", () => {
    const initialState = {
      products: [product],
      orders: [],
    };

    const state = reducer(
      initialState,
      completeOrder({ house: "10", street: "Main" }),
    );

    expect(state.orders).toHaveLength(1);
    expect(state.orders[0]).toEqual({
      house: "10",
      street: "Main",
      products: [product],
    });
    expect(state.products).toHaveLength(0);
  });
});
