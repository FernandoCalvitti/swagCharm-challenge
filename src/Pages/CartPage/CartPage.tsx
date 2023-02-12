import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../app/reducers/cart/cartSlice";
import Cart from "../../components/Cart";
import CartItem from "../../components/CartItem";
import { Item } from "../../components/ProductsGrid/ProductsGrid";

type Props = {};

const CartPage = (props: Props) => {
  const { productsList, totalCount } = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [productsList]);

  return (
    <Box
      height="1250px"
      margin="0 5.75%"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      mt="2rem"
      sx={{}}
    >
      <Grid container sx={{}}>
        <Grid
          item
          xs={9}
          maxHeight="605px"
          sx={{
            overflowY: "scroll",
          }}
        >
          <Typography>Your cart {totalCount}</Typography>
          <Cart products={productsList} />
        </Grid>
        <Grid xs={3} item>
          OrderSUmmary
        </Grid>
      </Grid>
      <Box>You might...</Box>
    </Box>
  );
};

export default CartPage;
