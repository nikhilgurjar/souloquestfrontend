"use client";
import NextLink from "next/link";
// @mui
import { Stack, Typography, Link, Box, Paper } from "@mui/material";
// layouts
// routes
//
import leftArrow from "../../../public/images/arrow-left.png";
import AuthRegisterForm from "./components/AuthRegisterForm";
import AuthWithSocial from "./components/AuthWithSocial";
import Image from "next/image";
// import AuthWithSocial from "./AuthWithSocial";
// import { PATH_AUTH } from "@/utils/path";
// ----------------------------------------------------------------------
export default function Register() {
  return (
    <>
      <div
        className="flex justify-between items-center px-4 sm:flex-row flex-col gap-y-5"
      >
        <Link sx={{ cursor: "pointer" }} href="/">
          <Image
            src={leftArrow}
            w={20}
            h={20}
            alt="arrow"
            className="sm:block hidden"
          />
          <h3 className="sm:hidden block font-semibold text-[#008080] text-xl">
            Souloquest
          </h3>
        </Link>
        <Typography variant="body1" fontWeight={400} >
          Already have an account?&nbsp;
          <Link
            component={NextLink}
            color="#008080"
            underline="none"
            fontWeight={500}
            sx={{ cursor: "pointer" }}
            href="/login"
          >
            Sign in
          </Link>
        </Typography>
      </div>
      <Box sx={{ maxWidth: "420px", margin: "auto auto" }}>
        <Stack direction="column">
          <Typography
            // textAlign={"center"}
            fontSize={44}
            component="h2"
            fontWeight={500}
            color={"#008080"}
            mt={3}
            mb={3}
            sx={{
              "@media (max-width: 420px)": {
                textWrap: "nowrap",
                fontSize: "30px",
              },
              textAlign: "center",
            }}
          >
            Create Your Account
          </Typography>
          <AuthRegisterForm />

          <AuthWithSocial />
        </Stack>
      </Box>
    </>
  );
}
