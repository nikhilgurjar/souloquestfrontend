'use client';
import { Box } from "@mui/material";
import React from "react";
import Header from "../nav-section/header/Header";
import FooterPage from "../sections/footer/FooterPage";

const MainLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: 1 }}>
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1
        }}
      >
        {children}
      </Box>
      <FooterPage/>
    </Box>
  );
};

export default MainLayout;
