import React from "react";
import MainLayout from "../layouts/MainLayout";
import { Box } from "@mui/material";

const LandingLayout = ({ children }) => {
  return (
    <MainLayout>
      <Box sx={{ my: 10 }}>{children}</Box>
    </MainLayout>
  );
};
export default LandingLayout;
