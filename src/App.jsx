import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Product from "./Components/Product";
import Info from "./Components/Info";
import Footer from "./Components/Footer";
import CartPage from "./Components/Cart-Page";
import CheckoutPage from "./Components/Checkout-Page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
