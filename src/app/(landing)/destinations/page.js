"use client";
import React from "react";
import Destination from "./components/Destination";
import Filters from "../(dashboard)/findpartner/components/filter/Filters";
import { Box } from "@mui/material";

const page = () => {
  return (
    <Box sx={{minHeight:"100vh",mt:15}}>
        <Filters/>
      <Destination />
    </Box>
  );
};

export default page;
