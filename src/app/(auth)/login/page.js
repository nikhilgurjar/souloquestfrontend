import React from "react";
import AuthLoginForm from "./components/AuthLoginForm";
import { Box, Link, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";
import NextLink from "next/link";
import {FaArrowLeftLong} from "react-icons/fa6";

// import leftArrow from "../../../public/images/arrow-left.png";
const page = () => {
  return (
    <>
       <Stack justifyContent={'space-between'} alignItems={'flex-start'} px={4} mb={2} sx={{
       width: '100%',
        gap: 1
      }}
        // className="flex justify-between items-center px-4 sm:flex-row flex-col gap-y-5"
      >
        
        <Link sx={{ cursor: "pointer" }} href="/">
          {/* <Image src={leftArrow} w={20} h={20} alt="arrow" className="sm:block hidden" /> */}
          <h3 className="sm:hidden block font-semibold text-[#008080] text-xl">Souloquest</h3>
        </Link>
        <Stack direction='row' justifyContent={'space-between'} sx={{width: '100%'}}>
        <FaArrowLeftLong className="sm:block hidden" size={20}/>
        <Typography variant="body1" fontWeight={400}>
          Not registered?&nbsp;
          <Link
            component={NextLink}
            color="#008080"
            underline="always"
            fontWeight={500}
            sx={{ cursor: "pointer", textDecoration: "underline #008080" }}
            href="/register"
          >
            create an account
          </Link>
        </Typography>
        </Stack>
       
      </Stack>
      <Box sx={{ maxWidth: "450px", margin: "auto auto" }}>
        <Typography mt={3} component="p" color={"#757575"}>
          Welcome back! 👋
        </Typography>
        <Typography
          fontSize={44}
          component="h2"
          fontWeight={500}
          color={"#008080"}
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

export default page;
