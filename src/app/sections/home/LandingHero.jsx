"use client";
// @mui
import { Container, Unstable_Grid2 as Grid, useTheme } from "@mui/material";

import { StyledRoot } from "./styles";

import useResponsive from "@/hooks/useResponsive";
import LandingHeroChild from "./LandingHero.server";

export default function LandingHero() {
  const theme = useTheme();

  const isMdUp = useResponsive("up", "md");

  return (
    <>
      <StyledRoot>
        <Container
          sx={{
            py: 15,
            display: { md: "flex" },
            alignItems: { md: "center" },
            height: { md: `100vh` },
            [theme.breakpoints.down("md")]: { mt: 0 },
          }}
        >
          <LandingHeroChild isMdUp={isMdUp} />
        </Container>
      </StyledRoot>
    </>
  );
}
