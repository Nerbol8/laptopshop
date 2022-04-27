import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import AddProductPage from "./pages/AddProductPage";
import EditProductPage from "./pages/EditProductPage";
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import CartPage from "./pages/CartPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import OrderPage from "./pages/OrderPage";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/admin-panel" element={<AdminPage />} />
        <Route path="/admin-panel-add" element={<AddProductPage />} />
        <Route path="/admin-panel-edit/:id" element={<EditProductPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/details/:id" element={<ProductDetailsPage />} />
        <Route path="/orderform" element={<OrderPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
