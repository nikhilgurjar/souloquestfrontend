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

import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { LoginSchema } from "@/utils/formSchemas";
import { toast } from "react-toastify";
import { useDispatch } from "@/redux/store";
import { logInUser } from "@/redux/slices/user";
import { login } from "@/actions/auth";
// ----------------------------------------------------------------------
export default function AuthLoginForm() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

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
      const res = await login({ email, password });
      dispatch(logInUser({ user: res.user }));
      toast.success("Login Successfully");
      if(router?.query?.returnUrl){
        router.push(router.query.returnUrl);
        return;
      }
      router.push("/profile");
    } catch (error) {
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
                  sx={{ color: "primary.main" }}
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

      {/* <Button
        fullWidth
        size="large"
        sx={{
          borderColor: "inertial",
          border: "1px",
          borderStyle: "solid",
          textTransform: "capitalize",
          display: "flex",
          gap: 2,
          alignItems: "center",
        }}
        onClick={() => signIn("google")}
      >
        <FcGoogle fontSize={24} />
        <Typography color={"#23222D"} fontWeight={500}>
          Login with Google
        </Typography>
      </Button> */}
    </FormProvider>
  );
}
