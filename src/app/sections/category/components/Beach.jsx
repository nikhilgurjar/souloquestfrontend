'use client';
import { Box, Container } from "@mui/material";
import Image from "next/image";
import React from "react";
import card1 from "../../../../../public/images/beach/Card 01.png";
import card2 from "../../../../../public/images/beach/Card 02.png";
import card3 from "../../../../../public/images/beach/Card 03.png";
import card4 from "../../../../../public/images/beach/Card 04.png";
import card5 from "../../../../../public/images/beach/Card 05.png";
import card6 from "../../../../../public/images/beach/Card 06.png";
const Beach = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
        flexWrap: "wrap",
      }}
    >
      {/* left */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
            flexDirection: "column",
          }}
        >
          <Image src={card1} alt="beach" height={200} width={"100vw"} />
          <Image src={card4} alt="beach" width={"100vw"} height={200} />
        </Box>
        <Image src={card2} alt="beach" width={"100vw"} height={430} />
      </Box>

      {/* right */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
          flexDirection: "column",
        }}
      >
        <Image src={card3} alt="beach" width={"100vw"} height={200} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
            // flexWrap: "wrap",
          }}
        >
          <Image src={card5} alt="beach" width={"100vw"} height={210} />
          <Image src={card6} alt="beach" width={"100vw"} height={210} />
        </Box>
      </Box>
    </Container>
  );
};

export default Beach;
