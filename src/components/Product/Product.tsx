import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Styles from "./Product.module.css";
import { Item } from "../ProductsGrid/ProductsGrid";
import truncate from "../../helpers/truncate";

type Props = {
  item: Item;
  handleAddOrRemove: any;
  productsList: Item[];
};

const Product: React.FC<Props> = ({
  item,
  handleAddOrRemove,
  productsList,
}) => {
  const { category, thumbnail, price, title, images, description, id } = item;

  const isOnCart = productsList.find((p: any) => p.id === id) ? false : true;

  return (
    <Grid className={Styles.productCard}>
      <Card className={Styles.card}>
        <CardMedia
          image={thumbnail}
          title={description}
          className={Styles.cardMedia}
        />
        <CardContent className={Styles.cardContent}>
          <Typography
            variant="h6"
            component="h6"
            fontSize={16}
            fontWeight={700}
            color="#091625"
          >
            {truncate(title)}
          </Typography>
          <Stack direction="row" className={Styles.bottomText}>
            <Typography
              fontSize="15px"
              fontWeight={600}
              color="#091625"
              className={Styles.price}
            >
              $ {price / 2} to $ {price}
            </Typography>
            <Typography
              fontSize="14px"
              fontWeight={400}
              color="#6B737C"
              className={Styles.price}
            >
              Minimun: <b>{Math.round((price / 4) * 3)}</b>
            </Typography>
          </Stack>
        </CardContent>
        <CardActions className={Styles.buttons}>
          <Button onClick={() => handleAddOrRemove(id)} size="small">
            {isOnCart ? "ADD TO CART" : "REMOVE "}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;
