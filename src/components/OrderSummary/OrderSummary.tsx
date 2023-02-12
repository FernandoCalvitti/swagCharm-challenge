import { useSelect } from "@mui/base";
import { Button, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../app/reducers/cart/cartSlice";

type Props = {};

const OrderSummary = (props: Props) => {
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
        <Typography>{3}</Typography>
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
        <Typography>$3450</Typography>
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
