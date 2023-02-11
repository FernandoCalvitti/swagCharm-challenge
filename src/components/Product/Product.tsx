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
};

const Product: React.FC<Props> = ({ item }) => {
  const { category, thumbnail, price, title, images, description } = item;

  return (
    <Grid className={Styles.productCard}>
      <Card className={Styles.card}>
        <CardMedia
          image={thumbnail}
          title={description}
          className={Styles.cardMedia}
        />
        <CardContent className={Styles.cardContent}>
          <Typography variant="h6" component="h6" fontSize={16}>
            {truncate(title)}
          </Typography>
          <Stack direction="row" className={Styles.bottomText}>
            <Typography variant="body2" className={Styles.price}>
              $ {price / 2} to $ {price}
            </Typography>
            <Typography variant="body2" className={Styles.price}>
              Minimun: {Math.round((price / 4) * 3)}
            </Typography>
          </Stack>
        </CardContent>
        <CardActions className={Styles.buttons}>
          <Button size="small">ADD TO CART</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;
