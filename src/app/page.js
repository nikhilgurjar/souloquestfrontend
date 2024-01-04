import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import DestinationPage from "./sections/desitnations/DestinationPage";
import BlogPage from "./sections/blogs/BlogPage";
import ServicePage from "./sections/desitnations/ServicePage";
import CategoryPage from "./sections/category/CategoryPage";
import LandingHero from "./sections/home/LandingHero";
import BookItenaryPage from "./sections/bookitenary/BookItenaryPage";
import SoloTravelingPage from "./sections/solotraveling/SoloTravelingPage";

const page = () => {
  return (
    <>
      <LandingHero />
      <DestinationPage />
      <Suspense fallback={<div>Loading...</div>}>
        <ServicePage />
        <CategoryPage />
        <SoloTravelingPage />
        <BookItenaryPage />
        <BlogPage />
      </Suspense>
    </>
  );
};

export default page;

// <DestinationPage />
// <ServicePage />
// <CategoryPage />
// <SoloTraveling />
// <BlogPage />
// <FooterPage />
