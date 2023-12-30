import React, { useRef } from "react";
import {
  Box,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import Card from "./DestinationCard";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";
const Destination = () => {
  const slideRef = useRef(null);
  const handleNext = () => {
    slideRef.current.slickNext();
  };
  const handlePrev = () => {
    slideRef.current.slickPrev();
  };
  const dummyData = [
    {
      url: "/public/images/destinationImg1.png",
      location: "City1",
      title: "Flores Road Trip 3D2N",
      duration: 7,
      amount: 1000,
      buyLink: "/",
    },
    {
      url: "/path/to/your/image2.jpg",
      location: "City2",
      title: "Forrester Glamping Co Bogor",
      duration: 5,
      amount: 800,
      buyLink: "/",
    },
    {
      url: "/path/to/your/image3.jpg",
      location: "City3",
      title: "Paket Tiket Pesawat Jakarta Bali",
      duration: 10,
      amount: 1200,
      buyLink: "/",
    },
    {
      url: "/path/to/your/image3.jpg",
      location: "City3",
      title: "Paket Tiket Pesawat Jakarta Bali",
      duration: 10,
      amount: 1200,
      buyLink: "/",
    },
    {
      url: "/path/to/your/image3.jpg",
      location: "City3",
      title: "Paket Tiket Pesawat Jakarta Bali",
      duration: 10,
      amount: 1200,
      buyLink: "/",
    },
    // Add more objects as needed
  ];
  var settings = {
    dots: true,
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          dots: true,
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
          {dummyData.map((item) => (
            <Card
              key={item.title}
              url={item.url}
              location={item.location}
              title={item.title}
              duration={item.duration}
              amount={item.amount}
              buyLink={item.buyLink}
            />
          ))}
        </Slider>
      </Box>
    </Container>
  );
};

export default Destination;
