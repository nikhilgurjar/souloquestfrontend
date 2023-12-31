// @mui
// import { useTheme } from '@mui/material/styles';
"use client";
import {
  Box,
  AppBar,
  Toolbar,
  Container,
  useTheme,
} from "@mui/material";
import { NavMobile, NavDesktop, navConfig } from "../nav";
import HeaderShadow from "./HeaderShadow";
import { bgBlur } from "@/utils/cssStyles";
import Logo from "@/components/Logo/Logo";
import useResponsive from "@/hooks/useResponsive";
import useOffSetTop from "@/hooks/useOffsetTop";

export default function Header() {
  const isMdUp = useResponsive("up", "md");
  const isOffset = useOffSetTop();
  const theme = useTheme();

  return (
    <AppBar color="transparent" sx={{ boxShadow: "none" }}>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: 64,
            md: 88,
          },
          transition: theme.transitions.create(["height", "background-color"], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),

          ...(isOffset && {
            ...bgBlur({ color: theme.palette.background.default }),
            color: "text.primary",
            height: {
              md: 88 - 16,
            },
          }),
        }}
      >
        <Container
          sx={{
            height: 1,
            display: "flex",
            alignItems: "center",
            width: "100%",
            gap: 20,
          }}
          style={{ justifyContent: isMdUp ? "center" : "space-between" }}
        >
          <Box
            sx={{
              lineHeight: 0,
              position: "relative",
            }}
          >
            <Logo />
          </Box>

          {isMdUp && (
            <NavDesktop
              data={navConfig}
              sx={{ color: "#2E476B", fontWeight: "600" }}
            />
          )}
          {!isMdUp && <NavMobile data={navConfig} />}
        </Container>
      </Toolbar>

      {isOffset && <HeaderShadow />}
    </AppBar>
  );
}
