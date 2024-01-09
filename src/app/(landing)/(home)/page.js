import React, { Suspense } from "react";
import BookItenaryPage from "@/app/sections/bookitenary/BookItenaryPage";
import CategoryPage from "@/app/sections/category/CategoryPage";
import DestinationPage from "@/app/sections/desitnations/DestinationPage";
import ServicePage from "@/app/sections/desitnations/ServicePage";
import LandingHero from "@/app/sections/home/LandingHero";
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
      </Suspense>
    </>
  );
};

export default page;


