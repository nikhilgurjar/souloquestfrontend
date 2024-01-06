"use client";
import { Box, Link, Stack, Typography } from "@mui/material";
import { FaArrowLeftLong } from "react-icons/fa6";
import NextLink from "next/link";
const AuthHeader = ({ urlTitle, url, pageQuestion }) => {
  return (
    <Stack
      justifyContent={"space-between"}
      alignItems={"flex-start"}
      mb={2}
      sx={{
        width: "100%",
        gap: 1,
      }}
    >
      <Link sx={{ cursor: "pointer" }} href="/">
        <Typography
          variant="h6"
          noWrap
          component="h1"
          sx={{
            display: { sm: "none", md: "block" },
            fontWeight: "600",
            color: "primary.main",
            fontSize: "1.5rem",
            "@media (max-width: 600px)": {
              display: "none",
            },
          }}
        >
          Souloquest
        </Typography>
      </Link>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        sx={{ width: "100%" }}
        spacing={2}
        alignItems={"center"}
      >
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            cursor: "pointer",
          }}
        >
          <FaArrowLeftLong size={20} />
        </Box>
        <Box
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="h1"
            sx={{
              fontWeight: "600",
              color: "primary.main",
              fontSize: "1.5rem",
            }}
          >
            Souloquest
          </Typography>
        </Box>
        <Typography variant="body1" color={"#333333"} fontWeight={400}>
          {pageQuestion}?&nbsp;
          <Link
            component={NextLink}
            color="primary.main"
            underline="none"
            fontWeight={600}
            sx={{ cursor: "pointer" }}
            href={url}
          >
            {urlTitle}
          </Link>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default AuthHeader;
