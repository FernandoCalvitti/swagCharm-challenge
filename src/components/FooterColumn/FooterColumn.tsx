import { Box, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { HOME } from "../../config/Routes";
import ComposedLink from "../ComposedLink";

type Props = {
  words: {
    title: string;
    links: {
      linkTitle: string;
      linkRef: string;
    }[];
  };
};

const FooterColumn: React.FC<Props> = ({ words }) => {
  return (
    <Box>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          height: "100%",
          width: "100%",
          "& a:visited, & a:link": {
            textDecoration: "unset",
            color: "inherit",
          },
        }}
      >
        <Typography variant="h6">{words.title}</Typography>
        {words.links.map((link) => (
          <ComposedLink key={link.linkTitle} href={link.linkRef}>
            <Typography
              sx={{
                paddingTop: "1.5rem",
                fontSize: "16px",
                "&: visited": {
                  textDecoration: "unset",
                  color: "inherit",
                  cursor: "auto",
                },
              }}
            >
              {link.linkTitle}
            </Typography>
          </ComposedLink>
        ))}
      </Stack>
    </Box>
  );
};

export default FooterColumn;
