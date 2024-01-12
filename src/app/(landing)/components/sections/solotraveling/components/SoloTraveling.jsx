import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import Image from "next/image";
import React from "react";
import solotravelImg from "@images/images/soloTravelImg.png";
import { CgArrowRight } from "react-icons/cg";
import SouloHistory from "../../SouloHistory/SouloHistory";
const SoloTraveling = () => {
  return (
    <>
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
              px: { xs: 8, md: 15 },
              py: 3,
            }}
          >
            <Typography
              variant="h3"
              color="initial"
              py={4}
              fontWeight={500}
              sx={{ fontSize: { xs: "2rem" } }}
            >
              Solo Travelling 🤔
            </Typography>
            <Typography variant="body1" color="initial" py={1}>
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
            alt="soulotravel"
            style={{
              width: "100%",
              height: "auto",
            }}
          ></Image>
        </Grid>
      </Grid>
      <SouloHistory />
    </>
  );
};

export default SoloTraveling;
