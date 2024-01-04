'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import LoadingButton from '@mui/lab/LoadingButton';
import FormProvider, { RHFTextField } from '@/components/hook-form';
import { UpdatePasswordSchema } from '@/utils/formSchemas';
import {FaCircleInfo} from "react-icons/fa6";
import { updatePassword } from '@/actions/auth';
import { toast } from 'react-toastify';
import { revalidatePath } from 'next/cache';
import { useDispatch } from '@/redux/store';

export default function AccountChangePassword() {
    const defaultValues = {
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    };
   
    const methods = useForm({
        resolver: yupResolver(UpdatePasswordSchema),
        defaultValues,
    });
   
    const { reset, handleSubmit,setError, formState: { isSubmitting }, } = methods;
    const onSubmit = async (data) => {
        try {
            reset();
            const response = await updatePassword({
                oldPassword: data.oldPassword,
                password: data.newPassword
            });
            
            toast.success('Password updated successfully');
        }
        catch (error) {
            console.error(error);
            toast.error(error || error?.error || error?.message || 'Something went wrong');
            setError('afterSubmit',{
                type: 'manual',
                message: error?.error || error?.message || 'Something went wrong',
            });
            console.error(error);
        }
    };
    return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Card sx={{
            maxWidth: '500px'
        }}>
        <Stack spacing={3} alignItems="center" sx={{ p: 3 }}>
          <RHFTextField name="oldPassword" type="password" label="Old Password" sx={{ width: '100%' }}/>

          <RHFTextField name="newPassword" type="password" label="New Password" 
          helperText={
          <Stack component="span" direction="row" alignItems="center">
                <FaCircleInfo size={16} style={{ marginRight: '8px'}}/> Password must be
                minimum 6+
              </Stack>
            } 
            sx={{ width: '100%' }}
            />

          <RHFTextField name="confirmPassword" type="password" label="Confirm New Password" sx={{ width: '100%' }}/>

          <Stack spacing={3} alignItems="flex-end" sx={{ mt: 3, width: '90%' }}>

    <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
  Save Changes
    </LoadingButton>
    </Stack>
        </Stack>
      </Card>
    </FormProvider>);
}
