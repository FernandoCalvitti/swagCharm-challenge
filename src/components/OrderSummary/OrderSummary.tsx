import { Button, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import Styles from "./OrderSummary.module.css";

type Props = {};

const OrderSummary = (props: Props) => {
  const { totalCount, totalAmount } = useSelector((state: any) => state.cart);

  return (
    <Grid
      xs={3}
      item
      display="flex"
      flexDirection="column"
      justifyContent="space-"
      alignItems="flex-start"
      height="fit-content"
      sx={{
        paddingLeft: "24px",
        "& > *": {
          width: "100%",
          marginBottom: "24px",
        },
      }}
      className={Styles.orderSummary}
    >
      <Typography>Order Summary</Typography>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{}}
      >
        <Typography>Number of items</Typography>
        <Typography>{totalCount}</Typography>
      </Box>
      <Divider />
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{}}
      >
        <Typography>Total: </Typography>
        <Typography>${totalAmount}</Typography>
      </Box>
      <Button
        sx={{
          background: "#3A4451",
          color: "white",
          textTransform: "none",
          "&: hover": {
            background: "#5881b8",
          },
        }}
      >
        Proceed to Checkout
      </Button>
      <Button
        sx={{
          textTransform: "none",
          mt: "12px",
        }}
        variant="outlined"
      >
        Continue shopping
      </Button>
    </Grid>
  );
};

export default OrderSummary;
