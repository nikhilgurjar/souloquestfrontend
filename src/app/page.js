import React from "react";
import Header from "./nav-section/header/Header";
import { Box } from "@mui/material";
import DestinationPage from "./sections/desitnations/DestinationPage";
import FooterPage from "./sections/footer/FooterPage";
import BlogPage from "./sections/blogs/BlogPage";
import ServicePage from "./sections/desitnations/ServicePage";
import SoloTraveling from "./sections/solotraveling/SoloTraveling";
import CategoryPage from "./sections/category/CategoryPage";
import LandingHero from "./sections/home/LandingHero";

const page = () => {
  return (
    <>
      <Header />
      <LandingHero />
      <DestinationPage />
      <ServicePage />
      <CategoryPage />
      <SoloTraveling />
      <BlogPage />
      <FooterPage />
    </>
  );
};

export default page;
