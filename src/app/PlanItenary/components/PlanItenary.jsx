import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import itenaryImg from "../../../../public/images/itenary/Rectangle 19389.png";
import ItenaryForm from "./ItenaryForm";
import ChatInput from "@/app/(dashboard)/chat/components/ChatInput";

const PlanItenary = () => {
  return (
    <Box sx={{ pb: 5 }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          bgcolor: "transparent",
          // boxShadow: "0px 4px 4px 0px #00000040",
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
            height: "60vh",
            zIndex: 5,
            boxShadow: "0px 4px 4px 0px #00000040",
            objectFit: { xs: "contain" },
            "@media(max-width:420px)": {
              objectFit: "contain",
            },
          }}
          // objectFit="cover"
        />
      </Box>
      <Box sx={{ mt: -21, zIndex: 10, position: "relative" }}>
        <ItenaryForm />
      </Box>
    </Box>
  );
};

export default PlanItenary;
