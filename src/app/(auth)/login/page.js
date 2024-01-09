'use client';
import React from "react";
import AuthLoginForm from "./components/AuthLoginForm";
import { Box, Typography } from "@mui/material";
import AuthHeader from "../components/AuthHeader";

const LoginPage = () => {
  return (
    <>
      <AuthHeader
        url={"/register"}
        pageQuestion={"Not registered"}
        urlTitle={"Register"}
      />
      <Box sx={{ maxWidth: "450px", margin: "auto auto" }}>
        <Typography mt={3} component="p" color={"#757575"}>
          Welcome back! 👋
        </Typography>
        <Typography
          fontSize={44}
          component="h2"
          fontWeight={500}
          color={"primary.main"}
          textAlign={"center"}
          mb={3}
          sx={{
            "@media (max-width: 420px)": {
              textWrap: "nowrap",
              fontSize: "30px",
            },
            textAlign: "center",
          }}
        >
          Login to your account
        </Typography>
        <AuthLoginForm />
      </Box>
    </>
  );
};

export default LoginPage;
