import { Box, Card, IconButton, Typography } from "@mui/material";
import Image from "@/components/image/image";
import React from "react";
import locationImg from "@images/images/Location.png";
import Link from "next/link";

const DestinationCard = ({
  location,
  title,
  rating,
  image,
  id,
  duration
}) => {
  const getTruncatedContent = (content, maxLength) => {
    return content.length > maxLength
      ? content.substring(0, maxLength) + "..."
      : content;
  };
  const maxLength = 24;
  return (
    <Card sx={{ width: "270px", p: (theme) => theme.spacing(1, .5) }}>
      <Image
        src={image}
        sx={{
          width: "100%",
          height: "200px",
        }}
        alt={title}
      />
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, px: 2 }}>
        <Image src={locationImg.src} alt="location" width={10} height={10} />
        <Typography variant="body2" fontSize={"10px"} color={"#8F8F8F"}>
          {location}
        </Typography>
      </Box>
      <Box sx={{ px: 2 }}>
        <Typography variant="h6" fontWeight={500} fontSize={"1.2rem"} component={Link} sx={{
          textDecoration: 'none'
        }} href={`/destination/${id}`}>
          {getTruncatedContent(title, maxLength)}
        </Typography>
       {duration && (
         <Typography variant="body2" color={"#636363"}>
         {duration} Days
       </Typography>
       )}
      </Box>
    </Card>
  );
};

export default DestinationCard;
