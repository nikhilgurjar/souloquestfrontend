import React from "react";
import MainLayout from "../layouts/MainLayout";
import { Grid } from "@mui/material";
import FooterPage from "../sections/footer/FooterPage";

const LandingLayout = ({ children }) => {
  // return <MainLayout>{children}</MainLayout>;
  return (
    <>
    {children}
    </>
  )
};

export default LandingLayout;
