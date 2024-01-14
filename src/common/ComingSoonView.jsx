// @mui
"use client";
import {
  Box,
  Stack,
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
// hooks
// _mock
// components

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import useCountdown from "@/hooks/useCountDown";
// import Image from "@/components/image";
import Link from "next/link";
import illustration from "../../public/images/illustrations/illustration_comingsoon.svg";
import Image from "next/image";

// ----------------------------------------------------------------------
const _socials = [
  {
    icon: <FaFacebookSquare />,
    url: "/",
    color: "#1877F2",
  },
  {
    icon: <FaInstagram />,
    url: "/",
    color: "#E02D69",
  },
  {
    icon: <FaLinkedin />,
    url: "/",
    color: "#0A66C2",
  },
  {
    icon: <FaTwitterSquare />,
    url: "/",
    color: "#00AAEC",
  },
];
export default function ComingSoonView() {
  const { days, hours, minutes, seconds } = useCountdown(
    new Date("05/07/2024 21:30")
  );
  console.log(days);

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" paragraph fontWeight={500}>
        Coming Soon!
      </Typography>

      <Typography sx={{ color: "text.secondary" }}>
        We are currently working hard on this page!
      </Typography>

      <Image
        alt="comingsoon"
        src={illustration}
        layout="responsive"
        style={{
          maxWidth: "400px",
        }}
      />

      <Stack
        direction="row"
        justifyContent="center"
        divider={<Box sx={{ mx: { xs: 1, sm: 2.5 } }}>:</Box>}
        sx={{ typography: "h5" }}
      >
        <TimeBlock label="Days" value={days} />

        <TimeBlock label="Hours" value={hours} />

        <TimeBlock label="Minutes" value={minutes} />

        <TimeBlock label="Seconds" value={seconds} />
      </Stack>

      <TextField
        fullWidth
        hiddenLabel
        placeholder="Enter your email"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button
                variant="contained"
                size="large"
                sx={{ color: "white", bgcolor: "black" }}
              >
                Notify
              </Button>
            </InputAdornment>
          ),
          sx: { pr: 0.5 },
        }}
        sx={{ my: 5, maxWidth: "450px", mx: "auto" }}
      />

      <Box sx={{ pb: 5 }}>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems={"center"}
          spacing={3}
        >
          {_socials.map((social) => (
            <Link key={social.url} href={social.url}>
              <IconButton sx={{ color: `${social.color}` }}>
                {social.icon}
              </IconButton>
            </Link>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------

function TimeBlock({ label, value }) {
  return (
    <div>
      <Box> {value} </Box>
      <Box sx={{ color: "text.secondary", typography: "body1" }}>{label}</Box>
    </div>
  );
}
