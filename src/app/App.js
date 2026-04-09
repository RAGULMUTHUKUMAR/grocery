import { Route, Routes } from "react-router-dom";
import LoginPage from "../features/auth/pages/LoginPage";
import NotFoundPage from "../features/navigation/pages/NotFoundPage";
import HomePage from "./routes/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
