"use client";
// @mui
import { styled } from "@mui/material/styles";
import illusionBg from "../../../../public/images/illusionBg.png";
import ladyImg from "../../../../public/images/HeroLadyImg.png";
import cardImg from "../../../../public/images/card.png";
import smallCardImg from "../../../../public/images/smallCard.png";
import trainImg from "../../../../public/images/Frame 11.png";
import planeImg from "../../../../public/images/Frame 10.png";

import {
  Typography,
  Stack,
  Container,
  Box,
  Unstable_Grid2 as Grid,
  useTheme,
} from "@mui/material";

import useResponsive from "@/hooks/useResponsive";
import Image from "next/image";
import CustomLandingInput from "./components/CustomlandingInput";

export default function LandingHero() {
  const theme = useTheme();
  const StyledRoot = styled("div")(() => ({
    background:
      "linear-gradient(180deg, #FFFFFF 14.25%, #81CCCC 86.46%, #FDFDFD 100%)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    overflow: "hidden",
  }));
  const isMdUp = useResponsive("up", "md");

  return (
    <>
      <StyledRoot>
        <Container
          sx={{
            mt: 5,
            py: 15,
            display: { md: "flex" },
            alignItems: { md: "center" },
            height: { md: `100vh` },
            [theme.breakpoints.down("md")]: { mt: 0 },
          }}
        >
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
                    <Typography
                      variant="h3"
                      textAlign={"center"}
                      component={"span"}
                    >
                      .
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
                  Souloquest.
                </Typography>
                <Typography
                  variant="body1"
                  color="#005A5A"
                  mt={3}
                  fontWeight={400}
                >
                  Find your perfect match, plan your dream adventure, and
                  <br /> make memories that last.
                </Typography>
                {/* <div>
                  <Image
                    src={searchBarImg}
                    alt="search"
                    width={500}
                    height={150}
                  />
                </div> */}
                {/* <CustomLandingInput/> */}
              </Stack>
            </Grid>

            {isMdUp && (
              <Grid xs={12} md={6} lg={6} sx={{ position: "relative" }}>
                <Box
                  sx={{
                    width: "100%",
                    textAlign: "right",
                    position: "relative",
                  }}
                >
                  <Image
                    width={400}
                    height={400}
                    src={illusionBg}
                    alt="souloquest"
                  />
                </Box>

                <Box sx={{ position: "absolute", top: 0, left: "30%" }}>
                  <Image
                    src={ladyImg}
                    width={400}
                    height={400}
                    alt="souloquest"
                  />
                  <Box sx={{ position: "absolute", top: 102, right: "0%" }}>
                    <Image
                      src={planeImg}
                      width={150}
                      height={60}
                      alt="souloquest"
                    />
                  </Box>
                </Box>
                <Box sx={{ position: "absolute", bottom: -10, left: "15%" }}>
                  <Image
                    src={cardImg}
                    width={200}
                    height={200}
                    alt="souloquest"
                  />
                </Box>
                <Box sx={{ position: "absolute", bottom: 100, right: -20 }}>
                  <Image
                    src={smallCardImg}
                    width={100}
                    height={100}
                    alt="souloquest"
                  />
                </Box>
                <Box sx={{ position: "absolute", top: 50, left: "32%" }}>
                  <Image
                    src={trainImg}
                    width={60}
                    height={60}
                    alt="souloquest"
                  />
                </Box>
              </Grid>
            )}
          </Grid>
        </Container>
      </StyledRoot>
    </>
  );
}