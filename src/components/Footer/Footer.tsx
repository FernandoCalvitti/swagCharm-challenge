import { Box } from "@mui/material";
import React from "react";

import Styles from "./Footer.module.css";
import FooterColumn from "../FooterColumn";
import { footerData } from "../../config/constants";
import FooterCompanyData from "../FooterCompanyData";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={Styles.footer}>
      <Box
        className={Styles.gridContainer}
        sx={{
          height: "256px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(4, 1fr)",
          gridColumnGap: "24px",
          gridRowGap: "24px",
          "& > *": {
            background: "#e6e8e9",
            p: "0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "flex-start",
            height: "256px",
            "& > *": {
              height: "auto",
            },
          },
        }}
      >
        <FooterCompanyData />
        <FooterColumn words={footerData.column1} />
        <FooterColumn words={footerData.column2} />
        <FooterColumn words={footerData.column3} />
      </Box>
      <Box></Box>
    </footer>
  );
};

export default Footer;
