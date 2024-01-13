import React, { useState } from "react";
import { Card, CardMedia, Typography, Box, Divider, Link } from "@mui/material";
import { GoClock } from "react-icons/go";
import { FaStar } from "react-icons/fa6";
import NextLink from "next/link";
const DestinationCard = ({
  imgUrl,
  location,
  rating,
  slug,
  duration,
  title,
}) => {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const cardStyles = {
    width: 320,
    height: "auto",
    margin: "auto",
    overflow: "hidden",
    borderRadius: "20px",
    position: "relative",
  };

  const overlayStyles = {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 40,
    backgroundColor: isHovered ? "rgba(0, 0, 0, 0.7)" : "inherit",
    transition: "background-color 300ms",
  };

  const imageStyles = {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    transition: "transform 500ms",
    transform: isHovered ? "scale(1.25)" : "scale(1)",
  };

  const imageBox = {
    overflow: "hidden",
    position: "relative",
    height: "200px",
  };

  const destinationTextStyles = {
    position: "absolute",
    bottom: isHovered ? "50px" : "-100%",
    left: "12%",
    zIndex: 50,
    transition: "bottom 500ms",
    color: "white",
  };

  const titleTextStyles = {
    position: "absolute",
    bottom: isHovered ? "10px" : "-100%",
    left: "12%",
    zIndex: 50,
    transition: "bottom 700ms",
    color: "white",
    fontSize: "3xl",
    overflow: "hidden",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 1,
  };

  return (
    <Card sx={cardStyles}>
      <Box
        className="imageBox"
        sx={imageBox}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Box className="overlay" sx={overlayStyles}></Box>
        <CardMedia
          component="img"
          className="image"
          sx={imageStyles}
          alt={"Destination image"}
          src={imgUrl}
        />
        <Box className="destinationText" sx={destinationTextStyles}>
          <Typography variant="body1" color="white">
            {location}
          </Typography>
        </Box>
        <Box className="titleText" sx={titleTextStyles}>
          <Typography variant="h4" color="white">
            {title}
          </Typography>
        </Box>
      </Box>
      <Box px={5} pb={4} pt={2}>
        <Typography
          variant="body1"
          component={"p"}
          sx={{ color: "grey.500", pt: 2 }}
        >
          {location}
        </Typography>
        <Link
          component={NextLink}
          href={slug}
          sx={{ textDecoration: "none", color: "initial" }}
          variant="h6"
        >
          {title}
        </Link>
      </Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="body1"
          color="#D0D5DB"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1,
            p: 2,
          }}
        >
          <GoClock />
          {duration}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1,
            p: 2,
          }}
        >
          <FaStar style={{ color: "#FFAB00", fontSize: "1.2em" }} />
          <Typography variant="h6" color="initial">
            {rating}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default DestinationCard;
