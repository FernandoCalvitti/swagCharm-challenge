import { Container } from "@mui/material";
import * as React from "react";
import Layout from "./components/Layout";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import { CART, HOME } from "./config/Routes";
import CartPage from "./Pages/CartPage";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={CART} element={<CartPage />} />
      </Routes>
    </Layout>
  );
}
