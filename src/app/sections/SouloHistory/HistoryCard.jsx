import { Card, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import calenderImg from "../../../../public/images/clanderImg.png";
const HistoryCard = () => {
  return (
    <Card sx={{ width: "200px",py:6 }}>
      <Stack spacing={2} justifyContent={"center"} alignItems={"center"}>
        <Image src={calenderImg} width={50} height={50} alt={""}  />
        <Typography variant="h5" color="#008080" fontWeight={500}>
          15+
        </Typography>
        <Typography variant="body1" color="initial">
          Years of Experience
        </Typography>
      </Stack>
    </Card>
  );
};

export default HistoryCard;
