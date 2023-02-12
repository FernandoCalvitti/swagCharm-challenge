import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
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
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

type Props = {
  product: Item;
};

const quantity = Array.from(Array(50).keys()).slice(0);

const CartItem: React.FC<Props> = ({ product }) => {
  const { thumbnail, description, title, price, id } = product;
  const { productsList, totalCount } = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  const index = productsList.findIndex((item: any) => item.id === id);

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
      width="100%"
      height="120px"
      marginTop="2rem"
      marginBottom="2rem"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
    >
      <CardMedia
        image={thumbnail}
        title={description}
        sx={{
          width: "120px",
          height: "120px",
        }}
      />
      <CardContent
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 0 0 16px",
          margin: 0,
        }}
      >
        <Box
          sx={{
            padding: 0,
            margin: 0,
            alignSelf: "flex-start",
          }}
        >
          <Typography
            variant="h6"
            component="h6"
            fontSize="18px"
            color="#091625"
            fontWeight={700}
            lineHeight="24px"
          >
            {truncate(title)}
          </Typography>
          <Typography fontWeight={600} fontSize="16px" color="#091625">
            Quantity:{" "}
            <Select
              defaultValue={1}
              disableUnderline
              variant="standard"
              onChange={(e: any) => handleChange(e)}
              sx={{
                textDecoration: "underline",
              }}
            >
              {quantity.map((q) => (
                <MenuItem key={q} value={q}>
                  {q}
                </MenuItem>
              ))}
            </Select>
          </Typography>
          <CardActions
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              margin: 0,
              padding: 0,
              "& > button": {
                padding: 0,
                margin: 0,
              },
            }}
          >
            <IconButton
              onClick={() => dispatch(removeProductFromCart(id as any))}
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
              sx={{
                justifySelf: "flex-start",
                height: "3rem",
                borderRadius: "1rem",
                "&:hover": {},
              }}
            >
              <DeleteForeverOutlinedIcon />
              <Typography fontWeight={600} fontSize="12px">
                Remove
              </Typography>
            </IconButton>
          </CardActions>
        </Box>
        <Box
          alignSelf="flex-end"
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-end"
          height="100%"
          sx={{}}
        >
          <Typography variant="body2">
            <b>${price}</b>{" "}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mt: "12px",
            }}
          >
            Total: <b>${productsList[index].totalItem}</b>
          </Typography>
        </Box>
      </CardContent>
    </Box>
  );
};

export default CartItem;
