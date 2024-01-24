
import React from "react";
import Destination from "./components/Destination";
import { Box } from "@mui/material";
import ItenaryButton from "./components/ItenaryButton";

const page = () => {
  return (
    <div className="min-h-screen px-5 mt-24  md:px-10 desktop:px-20">
      <Destination />
      <ItenaryButton />
    </div>
  );
};

export default page;
