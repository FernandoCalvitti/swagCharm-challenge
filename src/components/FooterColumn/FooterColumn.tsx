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
        <Typography fontSize="16px" fontWeight={700}>
          {words.title}
        </Typography>
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
              fontSize="15px"
              color="#3A4451"
              fontWeight={400}
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
