import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import MyOrders from "./pages/MyOrders";
import MyOrder from "./pages/MyOrder";
import Product from "./pages/Product";
import {
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";
import SignInPage from "./pages/SignInPage";

const ProtectedMyOrders = () => (
  <>
    <SignedIn>
      <MyOrders />
    </SignedIn>
    <SignedOut>
      <SignIn routing="path" path="/sign-in" />
    </SignedOut>
  </>
);

const ProtectedMyOrder = () => (
  <>
    <SignedIn>
      <MyOrder />
    </SignedIn>
    <SignedOut>
      <SignIn routing="path" path="/sign-in" />
    </SignedOut>
  </>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route
          path="/sign-up"
          element={<SignUp routing="path" path="/sign-up" />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/my-orders" element={<ProtectedMyOrders />} />
        <Route path="/my-order/:id" element={<ProtectedMyOrder />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </Router>
  );
};

export default App;
