'use client';
import { Stack, Typography, Box } from "@mui/material";
// layouts
// routes
import AuthRegisterForm from "./components/AuthRegisterForm";
import AuthWithSocial from "./components/AuthWithSocial";
import AuthHeader from "../components/AuthHeader";

// ----------------------------------------------------------------------
export default function RegisterPage() {
  return (
    <>
      <AuthHeader
        url={"/login"}
        pageQuestion={"Already have an account"}
        urlTitle={"Sign in"}
      />
      <Box sx={{ maxWidth: "450px", margin: "auto auto" }}>
        <Stack direction="column">
          <Typography
            // textAlign={"center"}
            fontSize={44}
            component="h2"
            fontWeight={500}
            color={"primary.main"}
            mt={3}
            mb={3}
            sx={{
              "@media (max-width: 420px)": {
                textWrap: "nowrap",
                fontSize: "30px",
              },
              textAlign: "center",
            }}
          >
            Create Your Account
          </Typography>
          <AuthRegisterForm />

          <AuthWithSocial />
        </Stack>
      </Box>
    </>
  );
}
