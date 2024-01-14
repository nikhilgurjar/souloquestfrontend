'use client';
import { RHFMultiSelect, RHFSwitch, RHFTextField } from '@/components/hook-form';
import FormProvider from '@/components/hook-form/FormProvider';
import { yupResolver } from '@hookform/resolvers/yup';
import LoadingButton from '@mui/lab/LoadingButton';
import { Card, Stack } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
const Languages = [
    {
        label: 'English',
        value: 'english',
    },
    {
        label: 'Hindi',
        value: 'hindi'
    },
    {
        label: 'Marathi',
        value: 'marathi'
    },
    {
        label: 'Punjabi',
        value: 'punjabi'
    },
    {
        label: 'Gujrati',
        value: 'gujrati'
    },
    {
        label: 'Bihari',
        value: 'bihari'
    },
    {
        label: 'French',
        value: 'french'
    },
    {
        label: 'tamil',
        value: 'tamil'
    }
];
const GinieProfile = () => {
    const defaultValues = {
        ginieType: 'Local',
        destinations: [],
        languages: []
    };
    const GinieSchema = Yup.object().shape({
        ginieType: Yup.string().required('Ginie type is required'),
        destinations: Yup.array().min(2, 'minimum 2 destinations are required').required('destinations are required'),
        languages: Yup.array().min(1, 'minimum 1 language is required').required('languages are required'),
    });
    const methods = useForm({
        defaultValues,
        resolver: yupResolver(GinieSchema),
    });
    const { reset, handleSubmit, formState: { isSubmitting }, } = methods;
    const onSubmit = async (data) => {
        try {
            reset();
            //   enqueueSnackbar('Update success!');
        }
        catch (error) {
            console.error(error);
        }
    };
    return (<FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Card>
            <Stack spacing={3} alignItems="flex-end" sx={{ p: 3 }}>
                <RHFSwitch name="ginieType" labelPlacement="start" label="Global ginie" sx={{ mt: 5 }}/>
            
            <RHFTextField name="destinations" label="Destinations" helperText={'Enter comma separated destinations'}/>
            <RHFMultiSelect name="languages" label="Languages" helperText="Languages you speak or understand" placeholder="Languages" multiple options={Languages}/>
            <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
            Save Changes
          </LoadingButton>
            </Stack>
        </Card>
    </FormProvider>);
};
export default GinieProfile;
