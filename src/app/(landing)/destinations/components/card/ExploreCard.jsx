import { Box, CardMedia, Link, Typography } from "@mui/material";
import Image from "next/image";
import NextLink from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa6";

const ExploreCard = ({
  imgUrl,
  location,
  rating,
  slug,
  userPicture,
  userName,
  userRole,
}) => {
  const imageStyles = {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    borderRadius: "12px",
  };
  const imageBox = {
    overflow: "hidden",
    position: "relative",
    height: "300px",
  };

  return (
    <Box sx={{ width: 290 }}>
      <Box sx={imageBox}>
        <CardMedia
          component="img"
          className="image"
          sx={imageStyles}
          alt={"Destination image"}
          src={imgUrl}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 3,
          px: 2,
        }}
      >
        <Typography variant="h5" color="initial">
          <Link
            component={NextLink}
            href={slug}
            color={"initial"}
            variant="h5"
            fontWeight={500}
            style={{ textDecoration: "none" }}
          >
            {location}
          </Link>
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1,
            px: 2,
          }}
        >
          <FaStar style={{ color: "#ffc107", fontSize: "1rem" }} />
          <Typography variant="h6" color="#666666">
            {rating}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          px: 1,
        }}
      >
        <Image
          src={userPicture}
          alt="user Picture"
          width={30}
          height={30}
          style={{ borderRadius: "50%" }}
        />
        <Typography
          variant="body1"
          color="#787575"
          sx={{ textTransform: "capitalize" }}
        >
          {userName}, {userRole}
        </Typography>
      </Box>
    </Box>
  );
};

export default ExploreCard;
