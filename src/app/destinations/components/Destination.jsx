// "use client";
import { Box } from "@mui/material";
import React from "react";
import DestinationCard from "./DestinationCard";
import { Pagination } from "@mui/material";

const dummyData = [
  {
    imgUrl: "/", // Replace with your image URL
    location: "Dummy Location",
    title: "Dummy Destination",
    rating: 4.5,
    slug: "/dummy-destination", // Replace with your destination URL
    duration: "3 days",
  },
  {
    imgUrl: "/", // Replace with your image URL
    location: "Dummy Location",
    title: "Dummy Destination",
    rating: 4.5,
    slug: "/dummy-destination", // Replace with your destination URL
    duration: "3 days",
  },
  {
    imgUrl: "/", // Replace with your image URL
    location: "Dummy Location",
    title: "Dummy Destination",
    rating: 4.5,
    slug: "/dummy-destination", // Replace with your destination URL
    duration: "3 days",
  },
  {
    imgUrl: "/", // Replace with your image URL
    location: "Dummy Location",
    title: "Dummy Destination",
    rating: 4.5,
    slug: "/dummy-destination", // Replace with your destination URL
    duration: "3 days",
  },
];
const Destination = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 3,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {dummyData.map((item) => (
          <DestinationCard
            imgUrl={item.imgUrl}
            location={item.location}
            rating={item.rating}
            slug={item.slug}
            duration={item.duration}
            title={item.title}
          />
        ))}
      </Box>
      <Pagination
        count={10}
        color="primary"
        size="large"
        sx={{
          my: 10,
          "& .MuiPagination-ul": {
            justifyContent: "center",
          },
        }}
      />
    </>
  );
};

export default Destination;
