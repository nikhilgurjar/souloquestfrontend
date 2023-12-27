'use client'
import React from 'react'
import { Box, Typography } from '@mui/material'
import RequestItem from './RequestItem'
import { useSelector } from '@/redux/store'

const Request = [
    {
      title: 'A dreamy trip to California',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, doloremque.',
      date: '29-10-2023',
      location: 'California, USA',
      roomid: 'rooma-1',
      isActive: true
    },
    {
      title: 'A dreamy trip to California',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, doloremque.',
      date: '29-10-2023',
      location: 'California, USA',
      roomid: 'rooma-2',
      isActive: true
    },
    {
      title: 'A dreamy trip to California',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, doloremque.',
      date: '29-10-2023',
      location: 'California, USA',
      roomid: 'rooma-3',
      isActive: true
    },
    {
      title: 'A dreamy trip to California',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, doloremque.',
      date: '29-10-2023',
      location: 'California, USA',
      roomid: 'rooma-4',
      isActive: true
    }
  ]
  
const RequestList = () => {
  const requests = useSelector(state=>state.partnerFinder.requests) || [];
return (
    <>
     { 
  requests?.length > 0 ?
(
  <Box
    sx={{
      columnGap: 3,
      display: 'grid',
      rowGap: { xs: 4, md: 5 },
      gridTemplateColumns: {
        xs: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)',
      },
    }}
  >
    {
      requests.map(item=><RequestItem key={item._id} request={item}/>)
    }
  </Box>
)
:
<Typography variant="body1" sx={{ color: 'text.secondary' }} textAlign={'center'}>
Not able to find any requests!! <br/>
Please try with different filters or post your request
</Typography>
}

    </>
)
}

export default RequestList