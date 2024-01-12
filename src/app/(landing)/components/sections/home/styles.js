import { styled, Container } from "@mui/material";

export const StyledRoot = styled("div")(() => ({
    background:
      "linear-gradient(180deg, #FFFFFF 14.25%, #81CCCC 86.46%, #FDFDFD 100%)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    overflow: "hidden",
}));

export const StyledContainer = styled(Container)(({ theme })=>({
    marginTop: 5,
    paddingTop: 15,
    paddingBottom: 15,
    display: { md: "flex" },
    alignItems: { md: "center" },
    height: { md: `100vh` },
    [theme.breakpoints.down("md")]: { mt: 0 }
}))