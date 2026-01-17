import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import MyOrders from "./pages/MyOrders";
import MyOrder from "./pages/MyOrder";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-orders" element={<MyOrders />} />
      </Routes>
    </Router>
  );
};

export default App;
