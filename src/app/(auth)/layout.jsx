import dynamic from "next/dynamic";
import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import imgAccn from "../../../public/images/loginimg.png";
const DynamicImage = dynamic(() => import("next/image"), { ssr: false });
const AuthLayout = ({ children }) => {
  return (
    <Grid container component="main" sx={{ minHeight: "100vh", pt: 7 }}>
      {/* <CssBaseline /> */}
      <Grid
        item
        xs={false}
        sm={false}
        md={5}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          "@media (max-width: 900px)": {
            display: "none", // Hide on screens smaller than 900px
          },
          overflowX: "hidden",
        }}
      >
        <Typography
          item
          component="h1"
          variant="h5"
          sx={{
            position: "absolute",
            top: "5.2%",
            left: "16%",
            color: "primary.main",
            fontWeight: "600",
          }}
        >
          Souloquest
        </Typography>
        <DynamicImage
          src={imgAccn} // Adjust the path to your image
          alt="join with us"
          width={400}
          loading="lazy"
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={7}
        component={Paper}
        square
        sx={{
          backgroundColor: "#F9F8F8",
          py: "35px",
          px: "4vw",
          overflow: "hidden",
        }}
      >
        {children}
      </Grid>
    </Grid>
  );
};

export default AuthLayout;
