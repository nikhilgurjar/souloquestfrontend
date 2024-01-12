'use client';
import React, { useRef } from "react";
import {
  Box,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import Card from "./DestinationCard";
import Slider from "react-slick";

import {MdChevronLeft, MdChevronRight} from "react-icons/md";
const Destination = ({destinations}) => {
  const slideRef = useRef(null);
  const handleNext = () => {
    slideRef.current.slickNext();
  };
  const handlePrev = () => {
    slideRef.current.slickPrev();
  };
  
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    centerPadding: "1px",
    pauseOnHover: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container
      sx={{
        py: 15,
        height: { md: `100vh` },
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#008080",
            fontSize: { xs: "2.5rem", md: "3rem" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Popular Destinations
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 1,
            alignItems: "center",
          }}
        >
          <IconButton onClick={handlePrev}>
            <MdChevronLeft width={20} height={20} />
          </IconButton>
          <IconButton onClick={handleNext}>
            <MdChevronRight width={20} height={20} />
          </IconButton>
        </Box>
      </Box>
      <Box mt={5}>
        <Slider {...settings} ref={slideRef}>
          {destinations?.map((item) => (
            <Card
              key={item.id}
              location={item.address}
              title={item.name}
              rating={item.rating}
              image={item.image}
              id={item.id}
              duration={item?.avgSpendTime}
            />
          ))}
        </Slider>
      </Box>
    </Container>
  );
};

export default Destination;
