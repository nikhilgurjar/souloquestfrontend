"use client"
import { Box, Typography } from "@mui/material";
import ServiceCard from "./components/ServiceCard";

const ServicePage = () => {
  const dummyData = [
    {
      title: "Service 1",
      imgUrl: "/path/to/image1.jpg",
      service: "Lorem Ipsum Service",
      color: "#fff",
    },
    {
      title: "Service 2",
      imgUrl: "/path/to/image2.jpg",
      service: "Dolor Sit Amet Service",
      color: "#DEFFFF",
    },
    {
      title: "Service 3",
      imgUrl: "/path/to/image3.jpg",
      service: "Consectetur Service",
      color: "#F3EFEF",
    },
    // Add more objects as needed
  ];

  return (
    <>
      <Typography
        variant="h3"
        sx={{ color: "primary.main", py:10, textAlign: "center" ,fontWeight:500}}
      >
        Our Services
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 4,
          flexWrap: "wrap",
        }}
      >
        {dummyData.map((item) => (
          <ServiceCard
            key={item.title}
            title={item.title}
            imgUrl={item.imgUrl}
            service={item.service}
            color={item.color}
          />
        ))}
      </Box>
    </>
  );
};

export default ServicePage;
