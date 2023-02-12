import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CartItem from "../CartItem";
import { Item } from "../ProductsGrid/ProductsGrid";

type Props = {
  products: Item[];
};

const Cart: React.FC<Props> = ({ products }) => {
  return (
    <Box width="100%" paddingRight={"24px"}>
      {products.map((product: Item) => (
        <Box key={product.id}>
          <CartItem product={product} />
          <Divider />
        </Box>
      ))}
    </Box>
  );
};

export default Cart;
