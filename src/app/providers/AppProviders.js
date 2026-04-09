import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "../../shared/components/ErrorBoundary";

function AppProviders({ children }) {
  return (
    <ErrorBoundary>
      <BrowserRouter>{children}</BrowserRouter>
    </ErrorBoundary>
  );
}

export default AppProviders;
