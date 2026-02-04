import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { Cart } from "./Cart";
import { renderWithStore } from "../../Shared/TestUtils";

describe("Cart integration test", () => {
  it("renders products count from redux store", () => {
    renderWithStore(<Cart />, {
      cart: {
        products: [
          { id: "1" },
          { id: "1" },
          { id: "2" },
        ],
        orders: [],
      },
    });

    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("renders 0 when cart is empty", () => {
    renderWithStore(<Cart />, {
      cart: {
        products: [],
        orders: [],
      },
    });

    expect(screen.getByText("0")).toBeInTheDocument();
  });
});
