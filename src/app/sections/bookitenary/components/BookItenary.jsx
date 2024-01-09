import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import BookItenaryImg from "../../../../../public/images/itenary/bookitenaryimg.png";
import stepimg1 from "../../../../../public/images/itenary/Group 7.png";
import stepimg2 from "../../../../../public/images/itenary/Group 12.png";
import stepimg3 from "../../../../../public/images/itenary/Group 11.png";
const BookItenary = () => {
  return (
    <Container sx={{ pb: 5 }}>
      <Typography
        variant="h3"
        sx={{
          color: "primary.main",
          mt: 15,
          textAlign: "center",
          fontWeight: 500,
          lineHeight: "1.3",
        }}
      >
        Book Your Next Itenary in 3 Easy Steps
      </Typography>
      <Typography
        variant="h6"
        color="initial"
        sx={{
          textAlign: "center",
          fontWeight: 500,
        }}
      >
        Easy and Fast
      </Typography>
      <Grid container justifyContent={"space-between"} alignItems={"center"}>
        <Grid item xs={12} md={6} lg={5} sx={{ mt: 10 }}>
          <Stack spacing={8}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
              <Image src={stepimg1} width={50} height={50} alt="step1" />
              <Box>
                <Typography variant="h6" color="initial">
                  Step1
                </Typography>
                <Typography variant="body1" color="initial">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
              <Image src={stepimg2} width={50} height={50} alt="step1" />
              <Box>
                <Typography variant="h6" color="initial">
                  Step1
                </Typography>
                <Typography variant="body1" color="initial">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
              <Image src={stepimg3} width={50} height={50} alt="step1" />
              <Box>
                <Typography variant="h6" color="initial">
                  Step1
                </Typography>
                <Typography variant="body1" color="initial">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Grid>
        <Grid
          sx={{
            display: { xs: "none", md: "block", lg: "block" },
            textAlign: "center",
          }}
          item
        >
          <Box sx={{ maxWidth: "100%" }}>
            <Image
              src={BookItenaryImg}
              layout="responsive"
              width={600}
              height={400}
              alt="steps"
              quality={100}
              objectFit="cover"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BookItenary;
