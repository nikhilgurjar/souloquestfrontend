'use client';
import * as Yup from 'yup';
import React from 'react'
import { useCallback, useEffect } from 'react';
// form
import useForm from 'react-hook-form/dist/useForm';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import LoadingButton from '@mui/lab/LoadingButton';
import FormProvider from '@/components/hook-form/FormProvider';
import { RHFUploadAvatar } from '@/components/hook-form/RHFUpload';
import { RHFTextField, RHFSelect } from '@/components/hook-form';
import { states } from '@/data';

export default function AccountGeneral({user}) {
    
    const [profilePicFile, setProfilePicFile] = React.useState(null);
    const defaultValues = {
        name: user?.name || '',
        email: user?.email || '',
        profilePic: user?.profilePic || '',
        phoneNumber: user?.phoneNumber || '',
        country: user?.country || '',
        state: user?.state || '',
        city: user?.city || '',
        company: user?.company || {},
        about: user?.about || '',
    };

    const UpdateUserSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().required('Email is required').email('Email must be a valid email address'),
        profilePic: Yup.string(),
        phoneNumber: Yup.string().required('Phone number is required'),
        country: Yup.string().required('Country is required'),
        state: Yup.string().required('State is required'),
        city: Yup.string().required('City is required'),
        company: Yup.object(),
        about: Yup.string().required('About is required'),
    });

    const methods = useForm({
        resolver: yupResolver(UpdateUserSchema),
        defaultValues,
    });

    const { reset, setError, setValue, handleSubmit, formState: { isSubmitting }, } = methods;

    const onSubmit = async (data) => {
        try {

          console.log('DATA', data);
        }
        catch (error) {
            reset();
            setError('afterSubmit', {
                ...error,
                message: message?.message || error.message,
            });
        }
    };
    const handleDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        const newFile = Object.assign(file, {
            preview: URL.createObjectURL(file),
        });
      setProfilePicFile(newFile);
      setValue('profilePic', newFile.preview);
    }, [setValue]);
    
    return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card 
          sx={{ 
            py: {xs: 3, md: 10}, 
            px: 3, 
            textAlign: 'center' 
            }}
            >
            <RHFUploadAvatar name="profilePic" 
            maxSize={3145728} 
            onDrop={handleDrop} 
            helperText={<Typography variant="caption" 
            sx={{
                mt: 2,
                mx: 'auto',
                display: 'block',
                textAlign: 'center',
                color: 'text.secondary',
            }}>
                  Allowed *.jpeg, *.jpg, *.png, *.gif
                  <br /> max size of 3 MB
                </Typography>}/>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Box rowGap={3} columnGap={3} display="grid" mb={3} gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
        }}>
              <RHFTextField name="name" label="Name"/>

              <RHFTextField name="email" label="Email Address"/>

              <RHFTextField name="phoneNumber" label="Phone Number"/>

              <RHFTextField name="address" label="Address"/>

              <RHFSelect native name="state" label="State" placeholder="State" defaultValue={'Maharashtra'}>
                <option value=""/>
                {states.map((country) => (
                <option key={country.code} value={country.name} style={{ cursor: 'pointer' }}>
                    {country.name}
                  </option>
                  ))}
              </RHFSelect>

              <RHFTextField name="state" label="State/Region"/>

              <RHFTextField name="city" label="City"/>

              <RHFTextField name="zipCode" label="Zip/Code"/>
            </Box>
            <RHFTextField name="about" multiline rows={4} label="About"/>
            <Stack spacing={3} alignItems="flex-end" sx={{ mt: 3 }}>

              <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                Save Changes
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>);
}
