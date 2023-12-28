import { IconButton } from "@mui/material";
import React from "react";

const NextArrowBtn = (props) => {
  const { onClick } = props;
  return <IconButton onClick={onClick} sx={{display:"block"}}>next</IconButton>;
};

export default NextArrowBtn;
