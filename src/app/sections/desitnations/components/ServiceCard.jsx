import React from "react";
import { Box, Card, Typography } from "@mui/material";
import Image from "next/image";
import home from "../../../../../public/images/vector.png";
const ServiceCard = ({ title, imgUrl, service, color }) => {
  return (
    <Card
      sx={{ width: "300px", textAlign: "left" }}
      style={{ backgroundColor: color ? color : "#fff" }}
    >
      <Box sx={{ px: 4, pt: 4 }}>
        <Image src={home} width={40} height={40} alt={title} />
        <Typography variant="h6" fontWeight={500} py={2}>
          {title}
        </Typography>
        <Typography variant="body2" color={"#636363"} pb={2}>
          {service}
        </Typography>
      </Box>
    </Card>
  );
};

export default ServiceCard;
