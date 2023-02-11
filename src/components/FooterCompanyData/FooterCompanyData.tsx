import { IconButton, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { HOME } from "../../config/Routes";
import ComposedLink from "../ComposedLink";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

type Props = {};

const FooterCompanyData = (props: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        minHeight: "270px",
      }}
    >
      <ComposedLink href={HOME}>
        <IconButton size="small" sx={{ margin: 0, padding: 0 }}>
          <img src="logo.svg" style={{ height: "48px" }} />
        </IconButton>
      </ComposedLink>
      <Typography
        sx={{
          maxWidth: "70%",
        }}
      >
        We sell custom products for all your needs. Packs and bulk products that
        you will enjoy.
      </Typography>
      <Stack direction={"row"}>
        <LocalPhoneIcon />
        <Typography>+1-202-555-0129</Typography>
      </Stack>
      <Box
        sx={{
          "& > * ": {
            fill: "white",
            background: "#535C67",
            borderRadius: "50%",
            padding: ".5rem",
            height: "2.5rem",
            width: "2.5rem",
            marginTop: "1rem",
            marginRight: "8px",
            "&: hover": {
              cursor: "pointer",
            },
          },
        }}
      >
        <FacebookIcon fontSize="large" />
        <TwitterIcon fontSize="large" />
        <InstagramIcon fontSize="large" />
        <LinkedInIcon fontSize="large" />
        <YouTubeIcon fontSize="large" />
      </Box>
    </Box>
  );
};

export default FooterCompanyData;
