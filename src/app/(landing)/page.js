import React, { Suspense } from "react";
import DestinationPage from "./components/sections/desitnations/DestinationPage";
import LandingHero from "./components/sections/home/LandingHero";

import ServicePage from "./components/sections/desitnations/ServicePage";
import BlogPage from "./components/sections/blogs/BlogPage";
import BookItenaryPage from "./components/sections/bookitenary/BookItenaryPage";
import CategoryPage from "./components/sections/category/CategoryPage";
import SoloTravelingPage from "./components/sections/solotraveling/SoloTravelingPage";


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


