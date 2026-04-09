import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AppStateProvider from "../../../app/providers/AppStateProvider";
import LoginPage from "./LoginPage";

test("shows validation errors for invalid login submission", async () => {
  render(
    <MemoryRouter>
      <AppStateProvider>
        <LoginPage />
      </AppStateProvider>
    </MemoryRouter>
  );

  fireEvent.click(screen.getByRole("button", { name: /sign in/i }));

  expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
  expect(screen.getByText(/Password is required/i)).toBeInTheDocument();
});
