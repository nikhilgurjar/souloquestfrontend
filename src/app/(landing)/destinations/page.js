
import React from "react";
import Destination from "./components/Destination";
import { Box } from "@mui/material";
import ItenaryButton from "./components/ItenaryButton";

const page = () => {
  return (
    <div style={{minHeight:"100vh",mt:15}}>
      <Destination />
      <ItenaryButton />
    </div>
  );
};

export default page;
