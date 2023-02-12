import { useSelect } from "@mui/base";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../app/reducers/cart/cartSlice";

type Props = {};

const OrderSummary = (props: Props) => {
  return (
    <div>
      OrderSummary
      <div>total valor total</div>
    </div>
  );
};

export default OrderSummary;
