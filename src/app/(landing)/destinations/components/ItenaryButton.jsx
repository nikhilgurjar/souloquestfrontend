'use client';
import React from 'react'
import { LoadingButton } from '@mui/lab'
import { Stack } from '@mui/material';
import { useRouter  } from 'next/navigation';

const ItenaryButton = () => {
    const router = useRouter();
  return (
    <Stack alignItems={'center'} mt={6}>
    <LoadingButton 
    color="primary"
    size="large"
    type="submit"
    variant="contained"
    onClick={()=> router.push('/planitenary')}
    >
        Create your Itenary
    </LoadingButton>
</Stack>
  )
}

export default ItenaryButton