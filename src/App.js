import Footer from "./footer";
import Header from "./header";
import Loginpage from "./loginpage";
import Product from "./product";
import { Route, Routes } from "react-router-dom";
import Service from "./service";
import Bestselling from "./sellingproduct";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="Header" element={<Header />} />
        <Route path="Loginpage" element={<Loginpage />} />
      </Routes>
      <Header />
      <Service/>
      <Bestselling/>
      <Product />
      <Footer />
    </div>
  );
}

export default App;
