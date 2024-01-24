"use client";
import {
  Box,
} from "@mui/material";
import React from "react";

const DashboardLayout = ({ children }) => {

  return (
    <>
     <Box component="main" sx={{ flexGrow: 1, pt: "70px" }} className="min-h-[162vh]">
          {children}
        </Box>
      </>
  );
};

export default DashboardLayout;
