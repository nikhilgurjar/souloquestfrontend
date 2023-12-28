"use client"
import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import Image from "next/image";
import React from "react";
import solotravelImg from "@/../public/images/soloTravelImg.png";
import { CgArrowRight } from "react-icons/cg";
import SouloHistory from "../SouloHistory/SouloHistory";
const SoloTraveling = () => {
  return (
    <Container>
      <Grid
        container
        width={"100%"}
        alignItems={"center"}
        py={15}
        justifyContent={"center"}
      >
        <Grid item xs={12} md={12} lg={6}>
          <Box
            sx={{
              background:
                "linear-gradient(180deg, #BFFFFF 55.73%, #80FFFF 91.67%)",
              px: {xs:8,md:12},
            }}
          >
            <Typography variant="h4" color="initial" py={4} fontWeight={500}>
              Solo Travelling 🤔
            </Typography>
            <Typography variant="body1" color="initial" py={2}>
              Dont worry we give you the best companion to you that will make
              your journey happier you can travel with fun and make friends
              across the world.
            </Typography>
            <Typography variant="body1" color="initial" py={3}>
              Find Your Companion
              <IconButton aria-label="Find-companion" color="inherit">
                <CgArrowRight />
              </IconButton>
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          md={false}
          lg={6}
          sx={{
            display: { xs: "none", md: "none", lg: "block" },
          }}
        >
          <Image
            src={solotravelImg}
            width={570}
            height={340}
            alt="soulotravel"
          ></Image>
        </Grid>
      </Grid>
      <SouloHistory/>
    </Container>
  );
};

export default SoloTraveling;
