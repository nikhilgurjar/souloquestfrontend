import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import itenaryImg from "../../../../public/images/itenary/Rectangle 19389.png";
import ItenaryForm from "./ItenaryForm";
import ChatInput from "@/app/(dashboard)/chat/components/ChatInput";

const PlanItenary = () => {
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          bgcolor:"red",
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
        }}
      >
        <Image
          src={itenaryImg}
          alt="itenary"
          quality={100} // Optional: Set quality for better appearance
          priority={true}
          // width={500}
          // fill
          style={{width:"100%",height:"50vh",objectFit:""}}

          // objectFit="cover"
          />
      </Box>
          <ItenaryForm/>
    </Box>
  );
};

export default PlanItenary;
