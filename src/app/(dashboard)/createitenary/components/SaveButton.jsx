'use client';
import { useSelector } from '@/redux/store';
import { LoadingButton } from '@mui/lab'
import { Stack } from '@mui/material'
import { useRouter, usePathname  } from 'next/navigation';
import React from 'react'

const SaveButton = ({itenaryId}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);
  const destinations = useSelector(state=>state.itenary.itenary)
  const title = useSelector(state=>state.itenary.title)
  const startDate = useSelector((state) => state.itenary.startDate);
  const endDate = useSelector((state) => state.itenary.endDate);
  const userId = useSelector(state=>state.user.user_id)
  const handleClick = async () => {
    try {
      setLoading(true);
    setDisabled(true);
    if(!userId){
      router.push('/login',{ state: { returnUrl: pathname } });
      return;
    }

    const body = JSON.stringify({
      id: itenaryId,
      destinations: destinations,
      startDate: startDate,
      endDate: endDate,
      title: title,
      userId: userId,
    });

    const response = await fetch('/api/itenary', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });
    const data = await response.json();
    } catch (error) {
      console.error(error);
    }
    finally{
      setLoading(false);
      setDisabled(false);
    }
    
  }
  return (
    <Stack alignItems={'center'} mt={6}>
        <LoadingButton 
        color="primary"
        size="large"
        type="submit"
        variant="contained"
        loading={loading}
        disabled={disabled}
        onClick={handleClick}
        >
            Save Itenary
        </LoadingButton>
    </Stack>
  )
}

export default SaveButton