import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ProductCatalog from "./ProductCatalog";

test("filters products by selected category", async () => {
  render(<ProductCatalog />);

  expect(await screen.findByText(/Fresh Mushroom/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: /Premium Groceries/i }));

  await waitFor(() => {
    expect(screen.getByText(/Fortune Sunflower Oil/i)).toBeInTheDocument();
    expect(screen.queryByText(/Fresh Mushroom/i)).not.toBeInTheDocument();
  });
});
