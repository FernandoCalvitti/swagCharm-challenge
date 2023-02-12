import React from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  Badge,
  BadgeProps,
  Stack,
  Button,
  SvgIcon,
} from "@mui/material";
import {
  ShoppingBagOutlined,
  PersonOutlineOutlined,
} from "@mui/icons-material";
import SearchBar from "../SearchBar";
import styled from "@emotion/styled";
import ComposedLink from "../ComposedLink/ComposedLink";
import { CART, HOME } from "../../config/Routes";
import Styles from "./Header.module.css";

type Props = {};

const StyledBadge = styled(Badge)<BadgeProps>(() => ({
  "& .MuiBadge-badge": {
    right: 18,
    top: 20,
    padding: "0 4px",
  },
}));

const Header: React.FC<Props> = (props: Props) => {
  return (
    <AppBar
      position="relative"
      sx={{
        height: "88px",
        display: "flex",
        justifyContent: "center",
        padding: "0 5.75%",
        overflow: "hidden",
        "& > div:first-of-type": {
          padding: "0",
          margin: "0",
          display: '"flex"',
          flexDirection: '"row"',
          alignItems: '"center"',
        },
      }}
      className={Styles.navbar}
    >
      <Toolbar sx={{}} className={Styles.toolbar}>
        <Stack
          sx={{
            "& a button": {
              margin: 0,
              padding: 0,
            },
          }}
          className={Styles.logo}
        >
          <ComposedLink href={HOME}>
            <IconButton size="small">
              <img src="logo.svg" style={{ height: "48px" }} />
            </IconButton>
          </ComposedLink>
        </Stack>
        <Stack className={Styles.searchbar} flexGrow={1}>
          <SearchBar />
        </Stack>
        <Stack direction="row" className={Styles.navItems}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="login"
          >
            <PersonOutlineOutlined />
            <Typography>Sign In</Typography>
          </IconButton>
          <ComposedLink href={CART}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
              sx={{ justifySelf: "flex-start" }}
            >
              <StyledBadge badgeContent={8} max={9}>
                <ShoppingBagOutlined fontSize="large" />
              </StyledBadge>
              <Typography>Cart</Typography>
            </IconButton>
          </ComposedLink>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
