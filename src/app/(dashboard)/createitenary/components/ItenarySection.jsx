'use client';
import { useSelector } from '@/redux/store';
import { Box, Typography } from '@mui/material';
import React from 'react'
import DaySection from './DaySection';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';

const ItenarySection = () => {
  const router = useRouter();
  const startDate = useSelector((state) => state.itenary.startDate);
  const endDate = useSelector((state) => state.itenary.endDate);
  const location = useSelector(state=>state.itenary.location);
  const numberOfDays = dayjs(endDate).diff(dayjs(startDate), 'day') + 1;

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
        {Array.from({ length: numberOfDays }).map((_, index) => (
          <DaySection day={index+1} key={index} 
          date_trip={dayjs(startDate).add(index, 'day').format('DD/MM/YY')} // Calculate and pass the date
            dayName={dayjs(startDate).add(index, 'day').format('dddd')} // Pass the day name
          />
        ))}
      </Box>
    </>
  )
}

export default ItenarySection