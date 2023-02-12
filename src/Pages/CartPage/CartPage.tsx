import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../app/reducers/cart/cartSlice";
import Cart from "../../components/Cart";
import CartItem from "../../components/CartItem";
import OrderSummary from "../../components/OrderSummary";
import { Item } from "../../components/ProductsGrid/ProductsGrid";
import Related from "../../components/Related";
import Styles from "./CartPage.module.css";

type Props = {};

const CartPage = (props: Props) => {
  const { productsList, totalCount } = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [productsList]);

  return (
    <Box
      minHeight="650px"
      margin="0 5.75%"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      mt="2rem"
      sx={{}}
      className={Styles.containerBox}
    >
      <Grid container className={Styles.summaryContainer}>
        <Grid
          item
          xs={9}
          maxHeight="605px"
          sx={{
            overflowY: "scroll",
            marginTop: "2rem",
          }}
          className={Styles.itemsContainer}
        >
          <Typography fontSize="24px" fontWeight={700} color="#091625">
            Your cart ({totalCount})
          </Typography>
          <Cart products={productsList} />
        </Grid>
        <OrderSummary />
      </Grid>
      <Typography alignSelf="flex-start" sx={{ marginTop: "80px" }}>
        You might also like
      </Typography>
      <Related />
    </Box>
  );
};

export default CartPage;
