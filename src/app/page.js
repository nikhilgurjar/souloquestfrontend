import React, { Suspense } from "react";
import dynamic from 'next/dynamic'
import DestinationPage from "./sections/desitnations/DestinationPage";
import FooterPage from "./sections/footer/FooterPage";
import BlogPage from "./sections/blogs/BlogPage";
import ServicePage from "./sections/desitnations/ServicePage";
import SoloTraveling from "./sections/solotraveling/SoloTraveling";
import CategoryPage from "./sections/category/CategoryPage";
import LandingHero from "./sections/home/LandingHero";
import BookItenaryPage from "./sections/bookitenary/BookItenaryPage";




const page = () => {
  return (
    <>

      <LandingHero />
      <DestinationPage />
      <Suspense fallback={<div>Loading...</div>}>
      <ServicePage />
      <CategoryPage />
      <SoloTraveling />
      <BookItenaryPage/>
      <BlogPage />
      <FooterPage />
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