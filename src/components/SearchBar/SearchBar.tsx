import React from "react";
import styled from "@emotion/styled";
import { alpha, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type Props = {};

const Search = styled("div")(() => ({
  position: "relative",
  borderRadius: "2rem",
  backgroundColor: "white",
  color: "#000",
  "&:hover": {
    backgroundColor: alpha("#fff", 0.55),
    transition: "ease-in-out .2s",
  },
  marginRight: "4rem",
  marginLeft: "4.25%",
  maxWidth: "65%",
  transition: "ease-in-out .2s",
}));

const SearchIconWrapper = styled("div")(() => ({
  paddingLeft: "2rem",
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "24px",
}));

const StyledInputBase = styled(InputBase)(() => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: ".25rem",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + 64px)`,
    transition: "ease-in",
    width: "100%",
    borderRadius: "2rem",
  },
  width: "100%",
  borderRadius: "2rem",
  height: "40px",
}));

const SearchBar = (props: Props) => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon fontSize="large" />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search products"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};

export default SearchBar;
