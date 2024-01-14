'use client'
import React from 'react'
import DestinationAutocomplete from './FilterInput';
import {Stack} from '@mui/material'
const Filters = ({optionsHandler}) => {

  return (
    <Stack
    spacing={2.5}
    alignItems={{ md: 'center' }}
    direction={{ xs: 'column', md: 'row' }}
    sx={{ 
        p: 4, borderRadius: 2, bgcolor: 'background.neutral', 
    mt: 5,
    mb: { xs: 5, md: 10 }, 
    maxWidth: '750px',
    mx: 'auto'
}}
   
  >
<DestinationAutocomplete optionsHandler={optionsHandler}/>
</Stack>
  )
}

export default Filters