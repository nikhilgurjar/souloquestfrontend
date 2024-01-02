import { Box, Link } from "@mui/material";
import React from "react";
import NextLink from "next/link";
const Logo = ({ sx }) => {
  return (
    <Link
      component={NextLink}
      href="/"
      color="#008080"
      aria-label="go to homepage"
      {...sx}
    >
      <Box
        sx={{
          fontSize: 30,
          width: 75,
          lineHeight: 0,
          cursor: "pointer",
          display: "inline-flex",
          fontWeight: "600",
        }}
      >
        Souloquest
      </Box>
    </Link>
  );
};

export default Logo;
