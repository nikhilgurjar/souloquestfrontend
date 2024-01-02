"use client";
import { useMemo, useState, useEffect } from "react";
// next
import NextLink from "next/link";
// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// @mui
import {
  Link,
  Stack,
  Alert,
  IconButton,
  InputAdornment,
  Divider,
  Button,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import FormProvider, { RHFTextField } from "@/components/hook-form";
import { useSession } from "next-auth/react";

import { useRouter } from "next/navigation";
import FcGoogle from "@react-icons/all-files/fc/FcGoogle";
import FaEye from "@react-icons/all-files/fa/FaEye";
import FaEyeSlash from "@react-icons/all-files/fa/FaEyeSlash";
import { LoginSchema } from "@/utils/formSchemas";
import { toast } from "react-toastify";
import { useDispatch } from "@/redux/store";
import { logInUser } from "@/redux/slices/user";
import { signIn } from "next-auth/react";

// ----------------------------------------------------------------------
export default function AuthLoginForm() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { data: session, status, update } = useSession();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (status === "authenticated") {
      dispatch(logInUser({ user: session.user }));
      router.push("/profile");
    }
  }, []);

  const defaultValues = {
    email: "demo@minimals.cc",
    password: "demo1234",
  };
  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;
  const onSubmit = async (data) => {
    try {
      const { email, password } = data;
      // await login({ email, password })
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      console.log(res);
      //  dispatch(logInUser({user: res.user}))
      toast.success("Login Successfully");
      router.push("/profile");
    } catch (error) {
      console.log(error);
      toast.error(
        error || error.error || error.message || "Something went wrong"
      );
      reset();
      // const message = submitErrorHandler(error);
      setError("afterSubmit", {
        ...error,
        message: error.error,
      });
    }
  };
  //   const submitError = useMemo(
  //     () => submitErrorHandler(loginError),
  //     [loginError]
  //   );
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4} sx={{ gap: "15px" }}>
        {/* {!!submitError?.message && (
          <Alert severity="error">{submitError.message}</Alert>
        )} */}

        <RHFTextField name="email" label="Email address" />
        <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            style: { borderRadius: "10px" },

            endAdornment: (
              <InputAdornment>
                <IconButton
                  sx={{ color: "#008080" }}
                  onClick={() => setShowPassword(!showPassword)}
                  size="small"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <LoadingButton
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting || isSubmitSuccessful}
        sx={{
          backgroundColor: "#008080",
          // bgcolor: "#008080",
          color: "common.white",
          "&:hover": {
            bgcolor: "#000",
            color: "common.white",
          },
          mt: 5,
          mb: 1,
        }}
      >
        Login
      </LoadingButton>
      <Stack alignItems="flex-start">
        <Link
          component={NextLink}
          //   href={PATH_AUTH.resetPassword}
          href={"/register"}
          variant="body2"
          color="#008080"
          underline="always"
          fontWeight={500}
          sx={{ cursor: "pointer", textDecoration: "underline #008080" }}
        >
          Forgot password?
        </Link>
      </Stack>
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
          Login with Google
        </Typography>
      </Button>
    </FormProvider>
  );
}
