'use client';
import { useSelector } from '@/redux/store';
import { Box, Typography } from '@mui/material';
import React from 'react'
import DaySection from './DaySection';

const ItenarySection = () => {
    const days = useSelector(state=>state.itenary.days);
  return (
    <>
    <Box sx={{
        bgcolor: 'transparent',
        marginTop: theme => theme.spacing(5),
        padding: (theme) => theme.spacing(1,4)
      }}>
        <Typography variant='h3' sx={{ color: 'inherit', fontWeight: 700}}>
          Itenary
        </Typography>
        {Array.from({ length: days }).map((_, index) => (
          <DaySection day={index+1} key={index} />
        ))}
      </Box>
    </>
  )
}

export default ItenarySection