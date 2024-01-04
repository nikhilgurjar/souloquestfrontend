// @mui
'use client'
import { styled } from "@mui/material/styles";
import { Box, Typography, IconButton } from "@mui/material";
// @types
// utils
import { bgBlur } from "@/utils/cssStyles";
// components
import Image from "@/components/image";
import { CustomAvatar } from "@/components/custom-avatar";
import { useSelector } from "@/redux/store";
import { FiEdit } from "react-icons/fi";
import Link from "next/link";

const StyledRoot = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%", // may be need to change later
  height: "40vh", // Set height to 100% of viewport height
  "&:before": {
    ...bgBlur({
      color: theme.palette.primary.darker,
    }),
    top: 0,
    zIndex: 9,
    content: "''",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
}));
const StyledInfo = styled("div")(({ theme }) => ({
  left: 0,
  right: 0,
  // top:110,
  zIndex: 99,
  position: "absolute",
  marginTop: theme.spacing(5),
  [theme.breakpoints.up("md")]: {
    right: "auto",
    display: "flex",
    alignItems: "center",
    left: theme.spacing(3),
    bottom: theme.spacing(3),
    bottom:-10
  },
}));
// ----------------------------------------------------------------------
export default function ProfileCover() {
  const user = useSelector((state) => state.user.user);
  const defaultValues = {
    profilePic:
      "https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw",
    cover:
      "https://api-prod-minimal-v510.vercel.app/assets/images/cover/cover_4.jpg",
  };
  return (
    <StyledRoot sx={{borderRadius:"20px"}}>
      <StyledInfo>
        <CustomAvatar
          src={user?.profilePic || defaultValues.profilePic}
          alt={user?.displayName}
          name={user?.displayName}
          sx={{
            mx: "auto",
            borderWidth: 2,
            borderStyle: "solid",
            borderColor: "common.white",
            width: { xs: 80, md: 128 },
            height: { xs: 80, md: 128 },
          }}
        />

        <Box
          sx={{
            ml: { md: 3 },
            mt: { xs: 1, md: 0 },
            color: "common.white",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography variant="h4">{user?.name}</Typography>
        </Box>
      </StyledInfo>

      <Image
        alt="cover"
        src={defaultValues.cover}
        sx={{
          width: "100%", // Set width to 100% of viewport
          height: "100%", // Set height to 100% of viewport height
          objectFit: "cover", // Ensure the image covers the entire container
        }}
      />
      <IconButton sx={{
        position: 'absolute',
        bottom: 10,
        right: 20,
        zIndex: 10,
        padding: '10px',
        bgcolor: 'common.white',
        '&: hover': {
          bgcolor: 'common.white',
          scale: 1.3
        }
      }} 
        component={Link}
        href="/profile/edit"
        >
      <FiEdit size={20} />
      </IconButton>
      
    </StyledRoot>
  );
}
