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
import React, { useEffect, useState } from "react";
import truncate from "../../helpers/truncate";
import Product from "../Product";
import { Item } from "../ProductsGrid/ProductsGrid";
import Styles from "./Related.module.css";

type Props = {};

const Related = (props: Props) => {
  const [related, setRelated] = useState<Item[]>([]);

  useEffect(() => {
    try {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => setRelated(data.products.slice(0, 4)));
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <Grid
      container
      sx={{ marginTop: "1.5rem", justifyContent: "center" }}
      overflow="hidden"
    >
      {related.map((item) => (
        <Grid item className={Styles.productCard} xl={3}>
          <Card
            sx={{
              marginLeft: "1.5rem",
              marginTop: "1.5rem",
            }}
            className={Styles.card}
          >
            <CardMedia
              image={item.thumbnail}
              title={item.description}
              className={Styles.cardMedia}
            />
            <CardContent className={Styles.cardContent}>
              <Typography variant="h6" component="h6" fontSize={16}>
                {truncate(item.title)}
              </Typography>
              <Stack direction="row" className={Styles.bottomText}>
                <Typography variant="body2" className={Styles.price}>
                  $ {item.price / 2} to $ {item.price}
                </Typography>
                <Typography variant="body2" className={Styles.price}>
                  Minimun: {Math.round((item.price / 4) * 3)}
                </Typography>
              </Stack>
            </CardContent>
            <CardActions className={Styles.buttons}>
              <Button size="small">{"ADD TO CART"}</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Related;
