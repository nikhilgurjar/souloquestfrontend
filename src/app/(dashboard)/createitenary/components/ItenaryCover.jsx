'use client';
import React from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import { Card, InputBase, Stack, debounce } from '@mui/material'
import { MdOutlineAvTimer } from "react-icons/md";
import { useDispatch, useSelector } from '@/redux/store';
import { setDays, setTitle } from '@/redux/slices/itenary';

const ItenaryCover = () => {
  
  const dispatch = useDispatch();
  const title = useSelector(state=>state.itenary.title);
  const days = useSelector(state=>state.itenary.days);

  const handleChange = (e) =>{
    dispatch(setTitle({title: e.target.value}));
  }


  const handleDayChange = (e) =>{
    dispatch(setDays({days: e.target.value}));
  }

  return (
    <Box
    sx={{
      width: '100%',
      maxHeight:'300px',
      position: 'relative',
      height: '300px'
    }}
    >
      <Box
      sx={{
        position: 'absolute',
        top: 0,
        minHeight: '240px',
        width: '100%',
      }}
      >
  <Image alt="cover" 
      src={'https://lh5.googleusercontent.com/p/AF1QipPNHQRPueqHXZElzTih_2JB2P8QHhhKDRAlnwyE=w203-h133-k-no'} 
      fill
      />
      </Box>
    
      <Card
      sx={{
        left: 0,
    right: 0,
    zIndex: 99,
    position: 'absolute',
    bottom: '10px',
    maxWidth: '80%',
    padding: '16px 16px 16px 24px',
    margin: '0 auto',
    borderRadius: '12px',
    bgcolor: 'background.paper',
    minHeight: '160px',
    boxShadow: '0 4px 24px rgba(0,0,0,.2)'
      }}
      >
        <Stack direction='column' justifyContent={'space-between'} >
        <InputBase
        placeholder={'beautiful title'}
        value={title}
        sx={{
          fontSize: '2.25rem',
          fontWeight: 700,
          letterSpacing:'-0.03em',
          lineHeight: 1.2,
          outline: 'none',
          textOverflow: 'ellipsis'
        }}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'Trip Title' }}
      />

<Stack direction={'row'} justifyContent={'space-between'} mt={3}>
          <Stack direction={'row'} spacing={1} alignItems={'center'}>
           <MdOutlineAvTimer />
            <InputBase
        placeholder={'number of days'}
        value={days}
        onChange={handleDayChange}
        inputProps={{ 'aria-label': 'Number of days' }}
        sx={{
          fontSize: '14px',
          fontWeight: 700,
          letterSpacing:'-0.03em',
          lineHeight: 1.2,
          outline: 'none',
          textOverflow: 'ellipsis'
        }}
      />
          </Stack>
          
        </Stack>
        </Stack>
      
      
      </Card>
    </Box>
  )
}

export default ItenaryCover