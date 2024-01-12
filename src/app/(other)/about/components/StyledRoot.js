"use client";
import travelImg from "@images/images/newsletter/travel_newsletter.jpg";
import { styled, alpha } from "@mui/material";
import { bgGradient } from "@/utils/cssStyles";

const StyledRoot = styled("div")(({ theme }) => ({
  padding: theme.spacing(10, 0),
  ...bgGradient({
    startColor: `${alpha(theme.palette.grey[900], 0.88)}`,
    endColor: `${alpha(theme.palette.grey[900], 0.88)}`,
    imgUrl: travelImg,
  }),
  [theme.breakpoints.up("md")]: {
    ...bgGradient({
      direction: "to right",
      startColor: `${alpha(theme.palette.grey[900], 0)} 0%`,
      endColor: `${alpha(theme.palette.grey[900], 1)} 50%`,
      imgUrl: travelImg,
    }),
    backgroundPosition: "center, left ",
    backgroundSize: "cover, auto 100%",
  },
}));
export default StyledRoot;
