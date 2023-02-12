import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Styles from "./ProductsGrid.module.css";
import Product from "../Product/Product";
import {
  addProductToCart,
  removeProductFromCart,
} from "../../app/reducers/cart/cartSlice";

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
  const dispatch = useDispatch();
  const { productsList } = useSelector((state: any) => state.cart);

  useEffect(() => {
    try {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => setItems(data.products));
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleAddOrRemoveProduct = (productId: number) => {
    const product = items.find((item) => item.id === productId);
    if (productsList.find((p: any) => p.id === productId)) {
      dispatch(removeProductFromCart(productId as any));
    } else {
      dispatch(addProductToCart(product as any));
    }
  };

  console.log(items);
  return (
    <main className={Styles.gridContainer}>
      {items.map((item) => (
        <Product
          productsList={productsList}
          item={item}
          key={item.id}
          handleAddOrRemove={handleAddOrRemoveProduct}
        />
      ))}
    </main>
  );
};

export default ProductsGrid;
