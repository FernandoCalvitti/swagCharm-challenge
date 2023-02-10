import { LinkProps, Link as MuiLink } from "@mui/material";
import { Link as ReactRouterLink } from "react-router-dom";

import React, { FC } from "react";

const ComposedLink: FC<LinkProps> = (props) => {
  return (
    <MuiLink
      sx={{ color: "inherit" }}
      {...props}
      component={ReactRouterLink}
      to={props.href ?? "#"}
    />
  );
};

export default ComposedLink;
