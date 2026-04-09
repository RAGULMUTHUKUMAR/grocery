import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders the redesigned homepage", async () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  expect(
    screen.getByText(/Healthy Groceries\. Fast Delivery\. Better Life\./i)
  ).toBeInTheDocument();
  expect(
    screen.getByText(/Pick Your Daily Grocery Favorites/i)
  ).toBeInTheDocument();
  expect(await screen.findByText(/12 items available/i)).toBeInTheDocument();
});
