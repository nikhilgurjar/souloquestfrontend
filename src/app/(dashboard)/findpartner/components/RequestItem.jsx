'use client'
import React from 'react'
import { Box, Button, Card, Container, Divider, Stack, Typography } from '@mui/material'
import { HiOutlineCalendarDays } from "@react-icons/all-files/hi2";
import dayjs from 'dayjs';
import { joinaRoom } from '@/actions/partnerFinder';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
const RequestItem = ({request}) => {

  const router = useRouter();

  const handleJoin = async () =>{
    try{
      await joinaRoom(request.room_id);
      toast.success('Room Joined')
      router.push('/chat');
    }
    catch(error){
      console.log(error)
    }
    
  }
    return (
        <Card>
        <Stack spacing={0.5} sx={{ p: 2.5 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {request.location}
            </Typography>
        <Typography variant="h6" sx={{ color: 'inherit' }}>
        {request.title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {request.description}
      </Typography>
        </Stack>
        <Divider sx={{ borderStyle: 'dashed' }} />
        <Stack direction="row" alignItems="center" sx={{ p: 2.5 }}>
        <Stack
        flexGrow={1}
        direction="row"
        alignItems="center"
        sx={{ typography: 'body2', color: 'text.disabled' }}
      >
        <HiOutlineCalendarDays size={16} style={{ marginRight: 12 }} />
        {dayjs(request.departureDate).format('DD MMM YYYY')}
        </Stack>
        <Stack spacing={0.5} direction="row" alignItems="center">
        <Button variant={'contained'} onClick={handleJoin} color='secondary' size={'small'} sx={{ mt: 2, maxWidth: 100 }}>
          Join
        </Button>      
        </Stack>
        </Stack>
      </Card>
      )
  
}

export default RequestItem