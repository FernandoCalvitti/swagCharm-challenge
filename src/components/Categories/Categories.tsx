import React from "react";
import { Box, Button, Toolbar, Typography } from "@mui/material";
import Styles from "./Categories.module.css";

type Props = {};

const pages = [
  "All products",
  "Drinkware",
  "Apparel",
  "Notebooks",
  "Backpacks",
];

const Categories = (props: Props) => {
  return (
    <Toolbar className={Styles.categories} style={{ padding: "0 0 0 5.75%" }}>
      <Box>
        {pages.map((page) => (
          <Button key={page}>
            <Typography fontSize="15px" variant="body1">
              {page}
            </Typography>
          </Button>
        ))}
      </Box>
    </Toolbar>
  );
};

export default Categories;
