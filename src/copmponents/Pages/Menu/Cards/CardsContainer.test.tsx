import { describe, it, expect, vi, beforeEach } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import { CardsContainer } from "./CardsContainer";
import { mealsApi } from "../../../../lib/api/mealsApi";
import { renderWithStore } from "../../../Shared/TestUtils";

vi.mock("../../../../lib/api/mealsApi", () => ({
  mealsApi: {
    getMany: vi.fn(),
  },
}));

const mockMeals = [
  {
    id: "1",
    meal: "Burger",
    price: 10,
    instructions: "Tasty burger",
    img: "/burger.png",
  },
  {
    id: "2",
    meal: "Pizza",
    price: 12,
    instructions: "Cheesy pizza",
    img: "/pizza.png",
  },
];

describe("CardsContainer integration", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("fetches meals and renders cards", async () => {
    (mealsApi.getMany as any).mockResolvedValueOnce({
      statusCode: 200,
      data: mockMeals,
    });

    renderWithStore(<CardsContainer />, {
      cart: { products: [], orders: [] },
    });

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Burger")).toBeInTheDocument();
      expect(screen.getByText("Pizza")).toBeInTheDocument();
    });
  });
});
