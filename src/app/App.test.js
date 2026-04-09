import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AppStateProvider from "./providers/AppStateProvider";
import App from "./App";

test("renders the redesigned homepage", async () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <AppStateProvider>
        <App />
      </AppStateProvider>
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
