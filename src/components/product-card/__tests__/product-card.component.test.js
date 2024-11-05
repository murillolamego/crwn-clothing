import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/test/test.utils";
import ProductCard from "../product-card.component";

describe("product card tests", () => {
  test("it should add the product item when Product Card button is clicked", () => {
    const mockProduct = {
      id: 1,
      name: "Item A",
      imageUrl: "test",
      price: 1,
    };

    const { store } = renderWithProviders(
      <ProductCard product={mockProduct} />,
      {
        preloadedState: {
          cart: {
            cartItems: [],
          },
        },
      }
    );

    const addToCartButtonElement = screen.getByText(/add to cart/i);

    fireEvent.click(addToCartButtonElement);

    expect(store.getState().cart.cartItems.length).toBe(1);
  });
});
