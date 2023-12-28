import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Carousel, {
  CarouselArrowIndex,
  CarouselArrows,
  CarouselDots,
} from "@/components/carousel";
import Card from "./DestinationCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrowBtn from "./NextArrowBtn";
import PrevArrowBtn from "./PrevArrowBtn";
const Destination = () => {
 
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
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow:<NextArrowBtn/>,
    prevArrow:<PrevArrowBtn/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
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
        <Box mt={5}>
          <Slider {...settings}>
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
