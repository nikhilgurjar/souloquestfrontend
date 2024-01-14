import React, { Suspense } from "react";
import DestinationPage from "@/app/sections/desitnations/DestinationPage";
import LandingHero from "@/app/sections/home/LandingHero";

import ServicePage from "@/app/sections/desitnations/ServicePage";
import BlogPage from "@/app/sections/blogs/BlogPage";
import BookItenaryPage from "@/app/sections/bookitenary/BookItenaryPage";
import CategoryPage from "@/app/sections/category/CategoryPage";
import SoloTravelingPage from "@/app/sections/solotraveling/SoloTravelingPage";


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


