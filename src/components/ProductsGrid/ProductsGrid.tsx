import React, { useEffect, useState } from "react";

import Styles from "./ProductsGrid.module.css";
import Product from "../Product/Product";

type Props = {};

type Rating = {
  rate: number;
  count: number;
};

export type Item = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

const ProductsGrid = (props: Props) => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    try {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => setItems(data.products));
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
