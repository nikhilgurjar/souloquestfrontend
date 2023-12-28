'use client';
import { useForm } from 'react-hook-form';
import { Stack, Card, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import FormProvider, { RHFTextField } from '@/components/hook-form';
import { FaInstagramSquare, FaLinkedin, FaTwitterSquare , FaFacebookSquare   } from "react-icons/fa";
import { useSelector } from '@/redux/store';

const SOCIAL_LINKS = [
    {
        value: 'facebook',
        icon: <FaFacebookSquare  size={24}/>,
        color: '#1877F2'
    },
    {
        value: 'instagram',
        icon: <FaInstagramSquare size={24}/>,
        color: '#E02D69'
    },
    {
        value: 'linkedin',
        icon: <FaLinkedin  size={24}/>,
        color: '#007EBB'
    },
    {
        value: 'twitter',
        icon: <FaTwitterSquare size={24}/>,
        color: '#00AAEC'
    },
];

export default function AccountSocialLinks() {
    const socialLinks = useSelector(state=> state.user.user)?.socialLinks;

    const defaultValues = {
        facebook: socialLinks?.facebook || '',
        instagram: socialLinks?.instagram || '',
        linkedin: socialLinks?.linkedin || '',
        twitter: socialLinks?.twitter || '',
    };
    
    const methods = useForm({
        defaultValues,
    });
    
    const { handleSubmit, formState: { isSubmitting }, } = methods;
    
    const onSubmit = async (data) => {
        try {
            // reset();
          
            console.log('DATA', data);
        }
        catch (error) {
            console.error(error);
        }
    };
    return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Card sx={{ p: 3 }}>
        <Stack spacing={3} alignItems="flex-end">
        { SOCIAL_LINKS.map((link) => (
        <RHFTextField key={link.value} name={link.value} 
          InputProps={{
                startAdornment: 
                <InputAdornment position="start" sx={{ color: link.color }}>
                    {link.icon}
                </InputAdornment>
            }}/>
            ))
        }
        
          <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
            Save Changes
          </LoadingButton>
        </Stack>
      </Card>
    </FormProvider>);
}
