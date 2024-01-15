'use client';
import React from 'react'
import { Box } from "@mui/material";
import Image from "next/image";
import itenaryImg from "@assets/images/itenary/Rectangle_19389.png";
import ItenaryForm from "./components/ItenaryForm";

const page = () => {
  return (
    <Box className='min-h-screen'>
    <Box
    sx={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      bgcolor: "red",
      height: "65vh",
      zIndex:-1,
      bgcolor:"transparent"
      // p: 0,
    }}
    >
    <Image
      src={itenaryImg}
      alt="itenary"
      quality={100} // Optional: Set quality for better appearance
      priority={true}
      // width={500}
      // fill
      style={{
        width: "100%",
        zIndex: 5,
        boxShadow: "0px 4px 4px 0px #00000040",
        objectFit: { xs: "contain" },
        "@media(max-width:420px)": {
          objectFit: "contain",
        },
        height:"max-content"
        // objectFit: "cover",
        // p: 0,
      }}
    />
  </Box>
  <Box sx={{ mt: -22, zIndex: 10, position: "relative", mb: 15 }}>
    <ItenaryForm />
  </Box>
    </Box>
  )
}

export default page