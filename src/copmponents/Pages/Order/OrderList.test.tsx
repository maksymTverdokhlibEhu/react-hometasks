import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import cartReducer, {
  addProduct,
} from "../../../lib/state/reducers/cart.reducer";
import { OrderList } from "./OrderList";
import { renderWithStore } from "../../Shared/TestUtils";

describe("OrderList / OrderCard integration", () => {
  it("renders order cards and allows removing products", async () => {
    const { store } = renderWithStore(<OrderList />);

    store.dispatch(
      addProduct({
        id: "1",
        title: "Pizza",
        price: 10,
        image: "/pizza.png",
        description: "Tasty",
      }),
    );
    store.dispatch(
      addProduct({
        id: "2",
        title: "Cake",
        price: 5,
        image: "/cake.png",
        description: "Sweet",
      }),
    );

    expect(await screen.findByText("Pizza")).toBeInTheDocument();
    expect(await screen.findByText("Cake")).toBeInTheDocument();

    expect(screen.getByText("$ 10 USD")).toBeInTheDocument();
    expect(screen.getByText("$ 5 USD")).toBeInTheDocument();

    expect(screen.getAllByText("1").length).toBe(2);

    const removeButtons = screen.getAllByText("X");
    await userEvent.click(removeButtons[0] as any);

    expect(screen.queryByText("Pizza")).not.toBeInTheDocument();
    expect(screen.getByText("Cake")).toBeInTheDocument();
  });
});
