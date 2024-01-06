// @mui
'use client';
import {
  Container,
  Typography,
  Box,
  Stack,
  Unstable_Grid2 as Grid,
} from "@mui/material";
// utils
// hooks

import aboutImg1 from "../../../../../public/images/aboutImage/travel_3.jpg";
import aboutImg2 from "../../../../../public/images/aboutImage/travel_4.jpg";
import aboutImg3 from "../../../../../public/images/aboutImage/travel_5.jpg";
import aboutImg4 from "../../../../../public/images/aboutImage/travel_6.jpg";
import shortenNumber from "./ShortenNumber";
import CountUp from "./CountUp";
import Image from "./Image";

// ----------------------------------------------------------------------

const IMAGES = [aboutImg1, aboutImg2, aboutImg3, aboutImg4];

const SUMMARY = [
  { name: "Destinations Explored", number: 13000 },
  { name: "Tours booked", number: 196 },
  { name: "Site visitors", number: 10679 },
  { name: "Verified hotels", number: 877 },
];

// ----------------------------------------------------------------------

export default function TravelAbout() {
  return (
    <Container
      sx={{
        overflow: "hidden",
        py: 5,
        mt: 10,
      }}
    >
      <Stack
        spacing={3}
        sx={{
          mx: "auto",
          maxWidth: 560,
          textAlign: "center",
          pb: { xs: 5, md: 10 },
        }}
      >
        <Typography variant="h1" fontWeight={500}>
          About Us
        </Typography>

        <Typography sx={{ color: "text.secondary",px:1 }}>
          Master Digital Marketing Strategy, Social Media Marketing, SEO,
          YouTube, Email, Facebook Marketing, Analytics & More!
        </Typography>
      </Stack>

      {/* <Grid container spacing={3}>
        {(isSmUp ? IMAGES : IMAGES.slice(0, 1)).map((img, index) => (
          <Grid key={img} xs={12} sm={6} md={index === 0 ? 6 : 2}>
            <Image alt={img} src={img} sx={{ height: 350, borderRadius: 2 }} />
          </Grid>
        ))}
      </Grid> */}
      <Grid container spacing={3}>
        {IMAGES.map((img, index) => (
          <Grid key={img} xs={12} sm={6} md={index === 0 ? 6 : 2}>
            <Image
              alt={img.src}
              src={img.src}
              sx={{ height: 350, borderRadius: 2 }}
            />
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          rowGap: 5,
          columnGap: 3,
          display: "grid",
          textAlign: "center",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          pt: { xs: 5, md: 10 },
          pb: 10,
        }}
      >
        {SUMMARY.map((value) => (
          <div key={value.name}>
            <Typography variant="h2" gutterBottom>
              <CountUp
                start={value.number / 5}
                end={value.number}
                sx={{ fontWeight: 700 }}
                formattingFn={(newValue) => shortenNumber(newValue)}
              />

              <Typography
                variant="h4"
                component="span"
                sx={{ verticalAlign: "top", ml: 0.5, color: "primary.main" }}
              >
                +
              </Typography>
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: "text.secondary", fontWeight: 500 }}
            >
              {value.name}
            </Typography>
          </div>
        ))}
      </Box>

      <Grid
        container
        spacing={{ xs: 5, md: 3 }}
        justifyContent="space-between"
        sx={{
          textAlign: { xs: "center", md: "left" },
          bgcolor: "#F4F6F8",
          p:5
        }}
      >
        <Grid xs={12} md={6} lg={5}>
          <Box
            sx={{
              mb: 2,
              width: 24,
              height: 3,
              borderRadius: 3,
              bgcolor: "primary.main",
              mx: { xs: "auto", md: 0 },
            }}
          />
          <Typography variant="h4">
            Maecenas malesuada. Cras ultricies mi eu turpis hendrerit fringilla
            Nunc egestas
          </Typography>
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <Typography variant="h4" paragraph>
            Fusce convallis metus id felis luctus
          </Typography>

          <Typography sx={{ color: "text.secondary" }}>
            Fusce convallis metus id felis luctus adipiscing. Etiam imperdiet
            imperdiet orci. Vestibulum eu odio. Phasellus nec sem in justo
            pellentesque facilisis.
            <br />
            <br />
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
            Maecenas nec odio et ante tincidunt tempus. Suspendisse enim turpis,
            dictum sed, iaculis a, condimentum nec, nisi. Vestibulum eu odio.
            Curabitur ullamcorper ultricies nisi.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
