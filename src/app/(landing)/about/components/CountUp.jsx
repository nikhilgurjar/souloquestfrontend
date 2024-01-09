"use client"
import { useRef } from "react";
import { useInView } from "framer-motion";
import ReactCountUp from "react-countup";
// @mui
import { Box, SxProps } from "@mui/material";
import shortenNumber from "./ShortenNumber";

// ----------------------------------------------------------------------

function CountUpHelper({ sx, ...other }) {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  return (
    <Box component="span" ref={ref} sx={sx}>
      {isInView && <ReactCountUp duration={1} {...other} />}
    </Box>
  );
}

export default function CountUp({value}){
  return (
    <CountUpHelper
      start={value.number / 5}
      end={value.number}
      sx={{ fontWeight: 700 }}
      formattingFn={(newValue) => shortenNumber(newValue)}
    />
  )
}
