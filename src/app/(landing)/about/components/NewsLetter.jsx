// @mui
"use client"
import {
  Stack,
  Button,
  Container,
  TextField,
  Typography,
  InputAdornment,
  Unstable_Grid2 as Grid,
  IconButton,
} from "@mui/material";
// utils
// components
import { CiLocationArrow1 } from "react-icons/ci";
import StyledRoot from "./StyledRoot";

// ----------------------------------------------------------------------


// ----------------------------------------------------------------------

export default function NewsletterTravel() {
  return (
    <StyledRoot>
      <Container>
        <Grid container spacing={3} justifyContent="flex-end">
          <Grid xs={12} md={5}>
            <Stack
              spacing={3}
              sx={{
                color: "common.white",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography variant="h2">Newsletter</Typography>

              <Typography>
                Sign up now to receive hot special offers
                <br /> and information about the best tours!
              </Typography>

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
                        sx={{ minWidth: 48, px: 0 }}
                      >
                      <IconButton>< CiLocationArrow1 style={{color:"#fff"}}/></IconButton>
                      </Button>
                    </InputAdornment>
                  ),
                  sx: { pr: 0.5, color: "#fff" },
                }}
                sx={{ py:5}}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
</StyledRoot>
  );
}
