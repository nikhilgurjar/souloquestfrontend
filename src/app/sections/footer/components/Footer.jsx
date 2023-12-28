import {
  Box,
  Container,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import NextLink from "next/link";
const Footer = () => {
  const pages = [
    { path: "/", name: "Home it work" },
    { path: "/", name: "Pricing" },
    { path: "/", name: "Blog" },
    { path: "/", name: "Demo" },
  ];
  const BookItenary = [
    { path: "/", name: "Book Itenary" },
    { path: "/", name: "Travel Genie" },
    { path: "/", name: "Provide" },
    { path: "/", name: "Companion" },
  ];
  return (
    <Grid
      container
      spacing={5}
      sx={{
        paddingInline:"20px",
        paddingY:"70px",
        bgcolor: "#008080",
        // display: "flex",
        justifyContent: "center",
        color: "#fff",
        alignItems:"flex-start"
        // flexWrap: "wrap",
      }}
    >
      <Grid item xs={12} md={4} lg={4} mr={10}>
        <Typography variant="h4">Souloquest</Typography>
        <Typography variant="body1" sx={{ textWrap: "wrap", mt: 3 }}>
          Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska.
          Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning, och
          pesask vyfisat. Viktiga poddradio har un mad och inde.{" "}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
          <IconButton href="/" sx={{ color: "#fff" }}>
            <FaFacebookF />
          </IconButton>
          <IconButton sx={{ color: "#fff" }}>
            <FaTwitter />
          </IconButton>
          <IconButton sx={{ color: "#fff" }}>
            <FaLinkedinIn />
          </IconButton>
          <IconButton sx={{ color: "#fff" }}>
            <FaInstagram />
          </IconButton>
        </Box>
      </Grid>

      <Grid item xs={12} md={3} lg={2}>
        <Typography variant="h5">Pages</Typography>
        <Stack spacing={2} mt={3}>
          {pages.map((item) => (
            <Link
              variant="body1"
              component={NextLink}
              color={"#fff"}
              underline="none"
              href={item.path}
            >
              {item.name}
            </Link>
          ))}
        </Stack>
      </Grid>

      <Grid xs={12} item md={3} lg={2}>
        <Typography variant="h5">Service</Typography>
        <Stack spacing={2} mt={3}>
          {BookItenary.map((item) => (
            <Link
              variant="body1"
              component={NextLink}
              color={"#fff"}
              underline="none"
              href={item.path}
            >
              {item.name}
            </Link>
          ))}
        </Stack>
      </Grid>

      <Grid xs={12} item md={2} lg={2}>
        <Typography variant="h5">Maps Location</Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
