import React from "react";
import Destination from "./components/Destination";
import { Box } from "@mui/material";
import ItenaryButton from "./components/ItenaryButton";

const page = () => {
  return (
    <Box sx={{minHeight:"100vh",mt:15}}>
      <Destination />
      <ItenaryButton />
    </Box>
  );
};

export default page;
