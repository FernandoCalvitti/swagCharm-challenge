import {
  Box,
  IconButton,
  MenuItem,
  Select,
  SvgIcon,
  Typography,
} from "@mui/material";
import React from "react";

import Styles from "./Footer.module.css";
import FooterColumn from "../FooterColumn";
import { footerData } from "../../config/constants";
import FooterCompanyData from "../FooterCompanyData";
import { Stack } from "@mui/system";

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
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          mt: "6rem",
        }}
        className={Styles.bottomText}
      >
        <Typography fontSize="14px" fontWeight={400} color="#535C67">
          © 2022 Customer Products. All rights reserved.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            "& > *": {
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            },
          }}
          className={Styles.selectors}
        >
          <Stack
            direction={"row"}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "36px",
            }}
          >
            <Typography fontSize="14px" fontWeight={400} color="#535C67">
              Region:{" "}
            </Typography>
            <IconButton>
              <img src="/flag.svg" alt="flag" />
            </IconButton>
            <Select
              defaultValue={"USA"}
              disableUnderline
              variant="standard"
              sx={{
                ml: ".5rem",
                color: "#535C67",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              <MenuItem value="USA">United States</MenuItem>
            </Select>
          </Stack>
          <Stack
            direction={"row"}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "36px",
            }}
          >
            <Typography fontSize="14px" fontWeight={400} color="#535C67">
              Language:{" "}
            </Typography>
            <Select
              defaultValue={"english"}
              disableUnderline
              variant="standard"
              sx={{
                ml: ".5rem",
                color: "#535C67",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              <MenuItem value="english">English</MenuItem>
            </Select>
          </Stack>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
