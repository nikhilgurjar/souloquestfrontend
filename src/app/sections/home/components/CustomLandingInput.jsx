import { Box, IconButton } from "@mui/material";
import React from "react";
import { IoSearch } from "react-icons/io5";

const CustomLandingInput = () => {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        p: 2,
        display: "flex",
        justifyContent: "space-between",
        gap: 2,
        borderRadius: "40px",
        width: "75%",
        // mx: "auto",
        "@media (max-width: 600px)": {
          width: "100%", // Make it full width on smaller screens
        },
      }}
    >
      <Box></Box>
      <Box></Box>
      <Box>
        <IconButton
          sx={{ color: "#fff", bgcolor: "primary.main", opacity: "0.8" }}
        >
          <IoSearch />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CustomLandingInput;
