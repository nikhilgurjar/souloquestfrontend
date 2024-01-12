'use client';
import React from "react";
import illusionBg from "@images/images/illusionBg.png";
import ladyImg from "@images/images/HeroLadyImg.png";
import cardImg from "@images/images/card.png";
import smallCardImg from "@images/images/smallCard.png";
import trainImg from "@images/images/Frame 11.png";
import planeImg from "@images/images/Frame 10.png";

import { Typography, Stack, Box, Unstable_Grid2 as Grid } from "@mui/material";

import Image from "next/image";
import CustomLandingInput from "./components/CustomLandingInput";

const LandingHeroChild = ({ isMdUp }) => {
  return (
    <Grid
      container
      spacing={1}
      justifyContent={"space-between"}
      width={"100%"}
      alignItems={"center"}
    >
      <Grid xs={12} md={6} lg={6}>
        <Stack
          sx={{
            textAlign: { xs: "center", md: "unset" },
          }}
          spacing={2}
        >
          <Box>
            <Typography
              variant="caption"
              sx={{
                bgcolor: "#8AD0D0",
                color: "#fff",
                py: 1,
                px: 3,
                borderRadius: "39px",
                fontSize: "14px",

                fontWeight: "500",
              }}
            >
              ✈️
              <Typography variant="h3" textAlign={"center"} component={"span"}>
               
              </Typography>{" "}
              FIRST IN INDIA
            </Typography>
          </Box>
          <Typography
            variant={isMdUp ? "h3" : "h4"}
            sx={{
              fontWeight: "500",
              textWrap: "nowrap",
            }}
          >
            Your Perfect Travel <br />
            Companion Awaits on <br />
            Souloquest
          </Typography>
          <Typography variant="body1" color="#005A5A" mt={3} fontWeight={400}>
            Find your perfect match, plan your dream adventure, and
            <br /> make memories that last
          </Typography>
          {/* <div>
          <Image
            src={searchBarImg}
            alt="search"
            width={500}
            height={150}
          />
        </div> */}
          <CustomLandingInput />
        </Stack>
      </Grid>

      {isMdUp && (
        <Grid xs={12} md={6} lg={6} sx={{ position: "relative", mt: 10 }}>
          <Box
            sx={{
              width: "100%",
              position: "relative",
              left: "30%",
            }}
          >
            <Image
              width={400}
              height={400}
              src={illusionBg}
              alt="souloquest"
              quality={100}
              priority={true}
            />
          </Box>

          <Box sx={{ position: "absolute", bottom: 9, left: "30%" }}>
            <Image
              src={ladyImg}
              width={400}
              height={470}
              alt="souloquest"
              quality={100}
              priority={true}
            />
            <Box sx={{ position: "absolute", top: "26%", right: "-2%" }}>
              <Image src={planeImg} width={150} height={60} alt="souloquest" />
            </Box>
          </Box>
          <Box sx={{ position: "absolute", bottom: -15, left: "17%" }}>
            <Image src={cardImg} width={200} height={200} alt="souloquest" />
          </Box>
          <Box sx={{ position: "absolute", bottom: 100, right: -20 }}>
            <Image
              src={smallCardImg}
              width={120}
              height={120}
              alt="souloquest"
            />
          </Box>
          <Box sx={{ position: "absolute", top: 50, left: "32%" }}>
            <Image src={trainImg} width={60} height={60} alt="souloquest" />
          </Box>
        </Grid>
      )}
    </Grid>
  );
};

export default LandingHeroChild;
