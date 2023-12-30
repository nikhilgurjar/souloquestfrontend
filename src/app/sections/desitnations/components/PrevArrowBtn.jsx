import { IconButton } from "@mui/material";
import React from "react";

const PrevArrowBtn = (props) => {
  const { onClick } = props;
  return (
    <IconButton onClick={onClick} sx={{ display: "block" }}>
      prev
    </IconButton>
  );
};

export default PrevArrowBtn;
