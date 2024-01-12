import { Box, Card, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import locationImg from "../../../../../public/images/Location.png";
import destinationImg1 from "../../../../../public/images/destinationImg1.png";
import Link from "next/link";

const DestinationCard = ({
  url,
  location,
  title,
  duration,
  amount,
  buyLink,
}) => {
  const getTruncatedContent = (content, maxLength) => {
    return content.length > maxLength
      ? content.substring(0, maxLength) + "..."
      : content;
  };
  const maxLength = 24;
  return (
    <Card sx={{ width: "270px" }}>
      <Image
        src={destinationImg1}
        style={{
          width: "100%",
          height: "auto",
        }}
        alt={title}
      />
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, px: 2 }}>
        <Image src={locationImg} alt="location" width={10} height={10} />
        <Typography variant="body2" fontSize={"10px"} color={"#8F8F8F"}>
          {location}
        </Typography>
      </Box>
      <Box sx={{ px: 2 }}>
        <Typography variant="h6" fontWeight={500} fontSize={"1.2rem"}>
          {getTruncatedContent(title, maxLength)}
        </Typography>
        <Typography variant="body2" color={"#636363"}>
          {duration} Days
        </Typography>
        <Link href={buyLink} style={{ textDecoration: "none" }}>
          <Typography variant="h6" py={2} color={"#42A7C3"} fontSize={"1rem"}>
            Rp {amount}
            <Typography variant="caption"> /person</Typography>
          </Typography>
        </Link>
      </Box>
    </Card>
  );
};

export default DestinationCard;
