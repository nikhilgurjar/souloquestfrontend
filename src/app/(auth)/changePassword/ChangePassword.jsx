'use client';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, Alert, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import FormProvider, { RHFTextField } from '@/components/hook-form';
import { useMemo, useState } from 'react';
import { UpdatePasswordSchema } from '@/utils/formSchemas';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function ChangePassword() {

    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const defaultValues = {
        oldPassword: '',
        password: '',
        confirmPassword: ''
    };

    const methods = useForm({
        resolver: yupResolver(UpdatePasswordSchema),
        defaultValues,
    });
    const { reset, setError, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful }, } = methods;
    const onSubmit = async (data) => {
        try {
            const { oldPassword, password } = data;
            const response = await axios.post('/api/changePassword', {
                oldPassword,
                password
            });
            toast.success("Password chaanged successfully")
            router.push('/login');
        }
        catch (error) {
            reset();

            toast.error(error || error.error || error.message || 'Something went wrong')
      reset();
      // const message = submitErrorHandler(error);
      setError("afterSubmit", {
        ...error,
        message: error.error,
      });
        }
    };
    const submitError = useMemo(() => submitErrorHandler(updateUserError), [updateUserError]);
    return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
      {!!submitError?.message && <Alert severity="error">{submitError.message}</Alert>}

        <RHFTextField name="oldPassword" label="Old Password" type={'password'}/>

        <RHFTextField name="password" label="New Password" type={showPassword ? 'text' : 'password'} InputProps={{
            endAdornment: (<InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'}/>
                </IconButton>
              </InputAdornment>),
        }}/>

        <RHFTextField name="confirmPassword" label="Confirm New Password" type={showPassword ? 'text' : 'password'} InputProps={{
            endAdornment: (<InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'}/>
                </IconButton>
              </InputAdornment>),
        }}/>
      </Stack>

      <LoadingButton fullWidth color="inherit" size="large" type="submit" variant="contained" loading={isSubmitSuccessful || isSubmitting} sx={{
            bgcolor: 'text.primary',
            color: 'common.white',
            '&:hover': {
                bgcolor: 'text.primary',
                color: 'common.white',
            },
            my: 2
        }}>
       Update Password
      </LoadingButton>
    </FormProvider>);
}
