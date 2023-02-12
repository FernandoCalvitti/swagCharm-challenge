import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeQuantity,
  getCartTotal,
  removeProductFromCart,
} from "../../app/reducers/cart/cartSlice";
import truncate from "../../helpers/truncate";
import { Item } from "../ProductsGrid/ProductsGrid";

type Props = {
  product: Item;
};

const quantity = Array.from(Array(50).keys()).slice(0);

const CartItem: React.FC<Props> = ({ product }) => {
  const { thumbnail, description, title, price, id } = product;
  const { productsList, totalCount } = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    const action = {
      id,
      amount: Number(e.target.value),
    };
    if (action.amount === 0) {
      dispatch(removeProductFromCart(action.id as any));
    }
    dispatch(changeQuantity(action as any));
  };

  return (
    <Box
      sx={{}}
      width="100%"
      height="120px"
      marginTop="2rem"
      marginBottom="2rem"
      display="flex"
      flexDirection="row"
    >
      <CardMedia
        image={thumbnail}
        title={description}
        sx={{ width: "120px", height: "120px" }}
      />
      <CardContent>
        <Typography variant="h6" component="h6" fontSize={16}>
          {truncate(title)}
        </Typography>
        <Typography>
          Quantity:{" "}
          <Select
            defaultValue={1}
            disableUnderline
            variant="standard"
            onChange={(e: any) => handleChange(e)}
          >
            {quantity.map((q) => (
              <MenuItem key={q} value={q}>
                {q}
              </MenuItem>
            ))}
          </Select>
        </Typography>

        <CardActions>
          <Button
            onClick={() => dispatch(removeProductFromCart(id as any))}
            size="small"
          >
            Remove
          </Button>
        </CardActions>
        <Stack direction="row">
          <Typography variant="body2">
            $ {price / 2} to $ {price}
          </Typography>
          <Typography variant="body2">
            Minimun: {Math.round((price / 4) * 3)}
          </Typography>
        </Stack>
      </CardContent>
    </Box>
  );
};

export default CartItem;
