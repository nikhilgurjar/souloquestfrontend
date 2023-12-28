import { Box, Container } from "@mui/material";
import Image from "next/image";
import React from "react";
import card1 from '../../../../../public/images/beach/Card 01.png'
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
          <Box>
            <Image src={card1} alt="beach" width={200} height={200} />
          </Box>
          <Box>
            <Image src={card4} alt="beach" width={200} height={200} />
          </Box>
        </Box>
        <Box>
          <Image src={card2} alt="beach" width={300} height={440} />
        </Box>
      </Box>

      {/* right */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          flexDirection: "column",
        }}
      >
        <box>
          <Image src={card3} alt="beach" width={440} height={200} />
        </box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
            flexWrap: "wrap",
          }}
        >
          <Box>
            <Image src={card5} alt="beach" width={150} height={220} />
          </Box>
          <Box>
            <Image src={card6} alt="beach" width={260} height={220} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Beach;
