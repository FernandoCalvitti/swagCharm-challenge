import React, { useEffect, useState } from "react";
import { Card, Container, Grid } from "@mui/material";
import { Stack } from "@mui/system";

import Styles from "./ProductsGrid.module.css";
import Product from "../Product/Product";

type Props = {};

type Rating = {
  rate: number;
  count: number;
};

export type Item = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Rating;
  title: string;
};

const ProductsGrid = (props: Props) => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    try {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setItems(data));
    } catch (error) {
      console.error(error);
    }
  }, []);

  console.log(items);
  return (
    <main className={Styles.gridContainer}>
      {items.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </main>
  );
};

export default ProductsGrid;
