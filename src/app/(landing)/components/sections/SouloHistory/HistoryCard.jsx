import { Card, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const HistoryCard = ({ number, title, imgUrl }) => {
  return (
    <Card sx={{ width: "200px", py: 6 }}>
      <Stack spacing={2} justifyContent={"center"} alignItems={"center"}>
        <Image src={imgUrl} width={40} height={40} alt={title} />
        <Typography variant="h5" color="#008080" fontWeight={500}>
          {number}
        </Typography>
        <Typography variant="body1" color="initial">
          {title}
        </Typography>
      </Stack>
    </Card>
  );
};

export default HistoryCard;
