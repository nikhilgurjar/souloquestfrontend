import React from "react";
import MainLayout from "../(landing)/components/layouts/MainLayout";

const LandingLayout = ({ children }) => {
  // return <MainLayout>{children}</MainLayout>;
  return (
    <>
    <MainLayout>
    {children}
    </MainLayout>
    </>
  )
};

export default LandingLayout;
