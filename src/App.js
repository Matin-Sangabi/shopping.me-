import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import CartPage from "./pages/Cartpage";
import HomePage from "./pages/HomePage";
import CartProvider from "./provider/CartProvider";
const App = () => {
  return (
    <Fragment>
      <CartProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </CartProvider>
    </Fragment>
  );
};

export default App;
