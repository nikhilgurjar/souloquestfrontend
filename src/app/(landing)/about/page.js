'use client';
import React from "react";
import TravelAbout from "./components/About";
import NewsletterTravel from "./components/NewsLetter";
import { Box } from "@mui/material";

const page = () => {
  return (
    <>
      <TravelAbout />
      <Box sx={{my:15}}>
        <NewsletterTravel />
      </Box>
    </>
  );
};

export default page;
