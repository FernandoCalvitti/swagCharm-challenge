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
      <Typography fontSize="24px" fontWeight={700} color={"#091625"}>
        Order Summary
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{}}
      >
        <Typography
          fontWeight={400}
          fontSize="16px"
          color={"#6B737C"}
          mt="1rem"
        >
          Number of items
        </Typography>
        <Typography fontWeight={400} fontSize="16px" color={"#6B737C"}>
          {totalCount}
        </Typography>
      </Box>
      <Divider />
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        mt={"24px"}
        sx={{}}
      >
        <Typography fontWeight={400} fontSize="18px" color={"#091625"}>
          Total:{" "}
        </Typography>
        <Typography fontSize="24px" fontWeight={700} color={"#091625"}>
          ${totalAmount}
        </Typography>
      </Box>
      <Button
        sx={{
          background: "#3A4451",
          color: "white",
          textTransform: "none",
          "&: hover": {
            background: "#5881b8",
          },
          fontSize: "16px",
          fontWeight: "700",
        }}
      >
        Proceed to Checkout
      </Button>
      <Button
        sx={{
          textTransform: "none",
          mt: "12px",
          fontSize: "16px",
          fontWeight: "700",
          border: "2px solid #091625",
          "&: hover": {
            background: "#5881b8",
            border: "2px solid #091625",
          },
        }}
        variant="outlined"
      >
        Continue shopping
      </Button>
    </Grid>
  );
};

export default OrderSummary;
