"use client";
import React from "react";
import Destination from "./components/Destination";
import { Box } from "@mui/material";

const page = () => {
  return (
    <Box sx={{minHeight:"100vh"}}>
      <Destination />
    </Box>
  );
};

export default page;
