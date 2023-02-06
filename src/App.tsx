import { Container } from "@mui/material";
import * as React from "react";
import Layout from "./components/Layout";
import Home from "./Pages/Home/Home";

export default function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}
