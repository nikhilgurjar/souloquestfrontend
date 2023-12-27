'use client';
import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { postPartnerRequest } from '@/actions/partnerFinder';
// @mui
import { Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import FormProvider, { RHFTextField } from '@/components/hook-form';
import { useSelector } from '@/redux/store';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';
const RequestForm = ({handleClose}) => {

    const RequestSchema = Yup.object().shape({
        title: Yup.string().required('title is required').max(50, 'max description length is 50'),
        description: Yup.string().required('description is required').max(300, 'max discription length is 300')
    });
    const defaultValues = {
        title: '',
        description: '',
    };
    const methods = useForm({
        resolver: yupResolver(RequestSchema),
        defaultValues,
    });

    const departureDate = useSelector(state=>state.partnerFinder.departureDate)
    const location = useSelector(state=>state.partnerFinder.location)
    const { reset, setError, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful }, } = methods;
    
    const onSubmit = async (data) =>{
      try {
        const response = await postPartnerRequest({departureDate: dayjs(departureDate).format('YYYY-MM-DD'), location: location.label, description: data.description, title: data.title});
      console.log(response)
      handleClose();
      } catch (error) {
        console.log(error)
        setError('afterSubmit', {
          ...error,
          message: error || 'Something went wrong',
        });
        toast.error(error);
      }
      finally{
        reset();
      }
    }
  return (
   <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3} sx={{ gap: '20px'}}>

        <RHFTextField name="title" label="Title of Request"/>
        <RHFTextField 
        name="description" 
        label="Short Description"
        multiline
        maxRows={4}
        />
      </Stack>
      <LoadingButton 
      fullWidth 
      color="inherit" 
      size="large" 
      type="submit" 
      variant="contained" 
      loading={isSubmitting} sx={{
            bgcolor: 'text.primary',
            color: 'common.white',
            '&:hover': {
                bgcolor: 'text.primary',
                color: 'common.white',
            },
            mt: 3
        }}>
        Request travel partner
      </LoadingButton>
    </FormProvider>
  )
}

export default RequestForm