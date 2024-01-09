"use client";
import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import itenaryImg from "../../../../../../public/images/itenary/Rectangle 19389.png";
import ItenaryForm from "./ItenaryForm";

const PlanItenary = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          position: "relative",
          bgcolor: "red",
          zIndex: -1,
          minHeight: "100vh",
          bgcolor: "transparent",
        }}
      >
        <Image
          src={itenaryImg}
          alt="itenary"
          quality={100} // Optional: Set quality for better appearance
          priority={true}
          style={{
            width: "100%",
            height: "60vh",
            objectFit: { xs: "contain" },
            "@media(max-width:420px)": {
              objectFit: "contain",
            },
          }}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "80%",
          left: "50%",
          transform: "translate(-50%, -20%)",
          mb: 15,
        }}
      >
        <ItenaryForm />
      </Box>
    </>
  );
};

export default PlanItenary;
