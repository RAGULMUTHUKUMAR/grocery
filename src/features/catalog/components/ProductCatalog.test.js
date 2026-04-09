import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import AppStateProvider from "../../../app/providers/AppStateProvider";
import CartDrawer from "../../../shared/components/CartDrawer";
import useAppState from "../../../shared/hooks/useAppState";
import ProductCatalog from "./ProductCatalog";

function CartCountProbe() {
    const { state } = useAppState();
    const totalItems = Object.values(state.cart).reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    return <span>{totalItems} items in cart</span>;
}

test("filters products by selected category", async () => {
    render(
        <AppStateProvider>
            <ProductCatalog />
            <CartDrawer />
            <CartCountProbe />
        </AppStateProvider>
    );

    expect(await screen.findByText(/Fresh Mushroom/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /Premium Groceries/i }));

    await waitFor(() => {
        expect(screen.getByText(/Fortune Sunflower Oil/i)).toBeInTheDocument();
        expect(screen.queryByText(/Fresh Mushroom/i)).not.toBeInTheDocument();
    });
});

test("adds a selected quantity to cart", async () => {
    window.localStorage.clear();

    render(
        <AppStateProvider>
            <ProductCatalog />
            <CartDrawer />
            <CartCountProbe />
        </AppStateProvider>
    );

    expect(await screen.findByText(/Fresh Mushroom/i)).toBeInTheDocument();

    const plusButtons = screen.getAllByRole("button", { name: /increase quantity/i });
    fireEvent.click(plusButtons[0]);
    fireEvent.click(screen.getAllByRole("button", { name: /add to cart/i })[0]);

    await waitFor(() => {
        const stored = JSON.parse(window.localStorage.getItem("greenbasket-app-state"));
        expect(Object.keys(stored.cart).length).toBeGreaterThan(0);
    });
});
