import { BrowserRouter } from "react-router-dom";
import AppStateProvider from "./AppStateProvider";
import ErrorBoundary from "../../shared/components/ErrorBoundary";
import CartDrawer from "../../shared/components/CartDrawer";
import ToastViewport from "../../shared/components/ToastViewport";

function AppProviders({ children }) {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AppStateProvider>
          {children}
          <CartDrawer />
          <ToastViewport />
        </AppStateProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default AppProviders;
