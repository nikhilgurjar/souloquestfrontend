'use client';
import { Box, Pagination  } from "@mui/material";
import React, { useEffect, useState } from "react";
import DestinationCard from "./card/DestinationCard";
import { getDestinationsPaginated } from "@/actions/placesAction";
import Filter from './Filter'
const PAGE_SIZE = 20; // Number of destinations per page

const DestinationClient = ({ destinations }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedDestinations, setDestination] = useState(destinations);
  const [location, setLocation] = useState(null);
  
  const handleLocationChange = (location) => {
    setLocation(location);
  }

  const handleOptionsChange = (options) => {
    console.info(options);
    setDestination(options);
  };

  const handlePageChange = async (event) => {
    event.preventDefault();
    const dest = await getDestinationsPaginated({pageNumber: currentPage+1});
    setCurrentPage(currentPage+1);
    setDestination(dest);
  };

  
  

  return (
    <>
     <Filter optionsHandler={handleOptionsChange} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 3,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
       
        {paginatedDestinations?.map((item) => (
          <DestinationCard
            key={item.id}
            imgUrl={item.image}
            location={item.formatted}
            rating={item.rating}
            slug={`/destination/${item.id}`}
            duration={item.duration}
            title={item.name}
          />
        ))}
      </Box>
      <Pagination
        count={6}
        page={currentPage}
        onChange={handlePageChange}
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

export default DestinationClient;