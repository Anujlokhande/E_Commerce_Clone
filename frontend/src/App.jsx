import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import MyOrders from "./pages/MyOrders";
import MyOrder from "./pages/MyOrder";
import Product from "./pages/Product";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/my-order/:id" element={<MyOrder />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </Router>
  );
};

export default App;
