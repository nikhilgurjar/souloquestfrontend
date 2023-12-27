// @mui
"use client";
// import { useGlobalContext } from "@/app/Context/store";
import { FcGoogle } from "react-icons/fc";
import { Button, Divider, Stack, Typography } from "@mui/material";

// auth
// import { useAuthContext } from '../../auth/useAuthContext';
// components
// ----------------------------------------------------------------------
export default function AuthWithSocial() {
  //   const { loginWithGoogle, loginWithFacebook } = useGlobalContext();
  const loginWithGoogle = false;
  const loginWithFacebook = false;
  const handleGoogleLogin = async () => {
    try {
      if (loginWithGoogle) {
        loginWithGoogle();
      }
      console.log("GOOGLE LOGIN");
    } catch (error) {
      console.error(error);
    }
  };
  const handleFacebookLogin = async () => {
    try {
      if (loginWithFacebook) {
        loginWithFacebook();
      }
      console.log("TWITTER LOGIN");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Divider
        sx={{
          my: 2.5,
          typography: "overline",
          color: "text.disabled",
          "&::before, ::after": {
            borderTopStyle: "solid",
          },
        }}
      >
        or
      </Divider>

      <Button
        fullWidth
        size="large"
        sx={{
          borderColor: "#00000",
          border: "1px",
          borderStyle: "solid",
          textTransform: "capitalize",
          display: "flex",
          gap: 2,
          alignItems: "center",
        }}
      >
        <FcGoogle fontSize={24} />
        <Typography color={"#23222D"} fontWeight={500}>
          Sign Up with Google
        </Typography>
      </Button>
    </div>
  );
}
