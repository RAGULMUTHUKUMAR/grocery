import Footer from "./footer";
import Header from "./header";
import Loginpage from "./loginpage";
import Product from "./product";
import { Route, Routes } from "react-router-dom";
import Service from "./service";
import Bestselling from "./sellingproduct";

function HomePage() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Service />
        <Bestselling />
        <Product />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Loginpage />} />
      </Routes>
    </div>
  );
}

export default App;
