"use client";
import { Box, Container } from "@mui/material";
import Image from "next/image";
import React from "react";
import card1 from "@assets/images/beach/Card 01.png";
import card2 from "@assets/images/beach/Card 02.png";
import card3 from "@assets/images/beach/Card 03.png";
import card4 from "@assets/images/beach/Card 04.png";
import card5 from "@assets/images/beach/Card 05.png";
import card6 from "@assets/images/beach/Card 06.png";

const ImageWithOverlay = ({ src, alt, height }) => (
  <Box
    position="relative"
    // width="100%"
    // Adjust the height as needed
    sx={{
      "&:after": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "98%",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        borderRadius: "20px",
      },
    }}
  >
    <Image
      src={src}
      alt={alt}
      width={"100vw"}
      height={height}
      style={{ zIndex: 10 }}
      quality={100}
    />
 
  </Box>
);

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
          <ImageWithOverlay src={card1} alt="beach" height={200} />
          <ImageWithOverlay src={card4} alt="beach" height={200} />
        </Box>
        <ImageWithOverlay src={card2} alt="beach" height={430} />
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
        <ImageWithOverlay src={card3} alt="beach" height={200} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
          }}
        >
          <ImageWithOverlay src={card5} alt="beach" height={210} />
          <ImageWithOverlay src={card6} alt="beach" height={210} />
        </Box>
      </Box>
    </Container>
  );
};

export default Beach;
