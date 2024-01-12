"use client";
import React from "react";
import historyImg from "../../../../public/images/historybg.png";
import { Box } from "@mui/material";

const HistoryWrapper = ({ children }) => {
  return (
    <Box
      sx={{
        // position: "relative",
        overflow: "hidden",
        backgroundImage: `url(${historyImg.src})`, // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        minHeight: "85vh",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        gap: 10,
        flexWrap: "wrap",
        px: 3,
        py: 10,
      }}
    >
      {children}
    </Box>
  );
};

export default HistoryWrapper;
