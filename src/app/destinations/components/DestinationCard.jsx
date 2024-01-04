// "use client";

import { Box, Button, Card, Divider, Link, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import NextLink from "next/link";
import { FaStar } from "react-icons/fa";
import { GoClock } from "react-icons/go";
const DestinationCard = ({
  imgUrl,
  location,
  rating,
  slug,
  duration,
  title,
}) => {
  return (
    <Card sx={{ width: "300px" }}>
      <Image
        width={300}
        height={200}
        src={imgUrl}
        alt={slug}
        layout="responsive"
        objectFit="cover"
      ></Image>
      <Box px={2} pb={4} pt={2}>
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
          <FaStar style={{ color: "#FFAB00", scale: 1.2 }} />
          <Typography variant="h6" color="initial">
            {rating}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default DestinationCard;
