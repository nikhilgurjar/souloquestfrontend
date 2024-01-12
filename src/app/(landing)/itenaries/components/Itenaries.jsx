"use client";
import React from "react";

import { Box } from "@mui/material";
import DestinationCard from "../../destinations/components/card/DestinationCard";
const dummyData = [
  {
    imgUrl:
      "https://st2.depositphotos.com/1001951/5478/i/450/depositphotos_54788291-stock-photo-woman-hiker-on-a-top.jpg", // Replace with your image URL
    location: "Dummy Location",
    title: "Itenary",
    rating: 4.5,
    slug: "/itenaries/1", // Replace with your destination URL
    duration: "3 days",
  },
  {
    imgUrl:
      "https://st2.depositphotos.com/1001951/5478/i/450/depositphotos_54788291-stock-photo-woman-hiker-on-a-top.jpg", // Replace with your image URL
    location: "Dummy Location",
    title: "Itenary",
    rating: 4.5,
    slug: "/itenary/1", // Replace with your destination URL
    duration: "3 days",
  },
  {
    imgUrl: "/", // Replace with your image URL
    location: "Dummy Location",
    title: "Itenary",
    rating: 4.5,
    slug: "/dummy-destination", // Replace with your destination URL
    duration: "3 days",
  },
  {
    imgUrl: "/", // Replace with your image URL
    location: "Dummy Location",
    title: "Itenary",
    rating: 4.5,
    slug: "/dummy-destination", // Replace with your destination URL
    duration: "3 days",
  },
];

const Itenaries = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 5,
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: "20px",
      }}
    >
      {dummyData.map((item) => (
        <DestinationCard
          key={item.slug}
          imgUrl={item.imgUrl}
          location={item.location}
          rating={item.rating}
          slug={item.slug}
          duration={item.duration}
          title={item.title}
        />
      ))}
   
    </Box>
  );
};

export default Itenaries;
