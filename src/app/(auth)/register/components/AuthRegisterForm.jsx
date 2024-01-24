"use client";
import { useState } from "react";
// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// @mui
import {
  Stack,
  IconButton,
  InputAdornment
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import FormProvider, { RHFTextField } from "@/components/hook-form";
// import Input from "@mui/joy/Input";
import {FaEyeSlash, FaEye} from "react-icons/fa";
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";
// import { PATH_AUTH } from "@/utils/path";
// import { RegisterSchema } from "@/utils/formSchemas";

import { register } from "@/actions/auth";
import { RegisterSchema } from "@/utils/formSchemas";
import { useDispatch } from "@/redux/store";
import { logInUser } from "@/redux/slices/user";
// import Iconify from "@/components/iconify";
// auth
// components
// ----------------------------------------------------------------------
export default function AuthRegisterForm() {
  // const [register, { error: registerError }] = useRegisterMutation();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const defaultValues = {
    name: "",
    email: "",
    password: "",
  };
  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });
  const {
    reset,
    setError,
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful },
  } = methods;
  const onSubmit = async (data) => {
    try {
      const { email, password, name } = data;      
      const response = register({ email, password, name });
      toast.success("Successfully Registered")
      dispatch(logInUser({user: response.user}))
      router.push('/findpartner');
    } catch (error) {
      toast.error("Invalid Credentials");
      reset();
     
      setError("afterSubmit", {
        ...error,
        message: error.message,
      });

    }
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>


        <RHFTextField name="name" label="Name" />
        <RHFTextField name="email" label="Email address" />

        <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
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

        <LoadingButton
          fullWidth
          color="inherit"
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting || isSubmitSuccessful}
          sx={{
            bgcolor: "#008080",
            color: (theme) =>
              theme.palette.mode === "light" ? "common.white" : "#008080",
            "&:hover": {
              bgcolor: "text.primary",
              color: (theme) =>
                theme.palette.mode === "light" ? "common.white" : "grey.800",
            },
            textTransform: "capitalize",
          }}
        >
          Create account
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
