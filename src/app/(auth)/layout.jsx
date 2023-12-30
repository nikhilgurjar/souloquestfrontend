import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// import imgAccn from "../../public/images/imageAccn.png";
import Image from "next/image";


const AuthLayout = ({ children }) => {

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      {/* <CssBaseline /> */}
      <Grid
        item
        xs={false}
        sm={false}
        md={5}
        sx={{
          backgroundColor: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          "@media (max-width: 900px)": {
            display: "none", // Hide on screens smaller than 900px
          },
        }}
      >
        <Typography
          item
          component="h1"
          variant="h5"
          sx={{
            position: "absolute",
            top: "6%",
            left: "16%",
            color: "#008080",
            fontWeight: "500",
          }}
        >
          Souloquest
        </Typography>
        {/* <Image
          item
          src={imgAccn}
          alt="create Account"
          width={500}
          height={500}
          // loading="lazy"
        /> */}
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={7}
        component={Paper}
        square
        sx={{ backgroundColor: "#F9F8F8", padding: "35px",overflow:"hidden" }}
      >
        {children}
      </Grid>
    </Grid>
  );
};

export default AuthLayout;
