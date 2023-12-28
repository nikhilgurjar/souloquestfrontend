import React from 'react'
import { Card, Stack, Typography, Grid, Divider } from '@mui/material'
import { CiLocationOn } from "react-icons/ci";
import { GiSandsOfTime } from "react-icons/gi";
import { FaStar } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";

const DestinationCard = ({destination, onRemove}) => {
  console.log(destination)
  const handleOnRemove = (event) => {
    event.preventDefault()
    onRemove(event.currentTarget.id)
  }
  return (
    <Card
    sx={{
      position: 'relative',
      maxWidth: 540,
      '&:hover': {
        boxShadow: (theme) => theme.customShadows.z24,
      }
    }}
    id={destination.id}
  >
    <Stack spacing={3} sx={{ p: 3, pb: 0, width: '100%' }}>
      <Stack
        spacing={{
          xs: 3,
          sm: 1,
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="overline" sx={{ color: 'rgb(250, 84, 28)', lineHeight: 1.5, fontWeight: 700 }}>
            {destination.category}
          </Typography>
{/* 
          <Typography variant="h6" fontWeight={300}>
          <FaStar color='rgb(255, 171, 0)' size={'20px'}/> {destination.rating}
          </Typography> */}
        </Stack>

        <Stack spacing={1}>
          {/* <Link component={RouterLink} to={paths.eLearning.course} color="inherit"> */}
            <Typography variant="h6" line={1} sx={{fontWeight: 600, lineHeight: 1.55556}}>
              {/* {slug} */}
              {/* {destination.title} */}
              {destination.address_line1}
            </Typography>
             <Stack
          direction="row"
          alignItems="center"
          sx={{ typography: 'body2', color: 'text.secondary' }}
        >
           <CiLocationOn style={{marginRight: .5}}/> 
          {destination.address}
        </Stack>
          {/* </Link> */}

          <Typography
            variant="body2"
            color="text.secondary"
           sx={{
            lineHeight: '1.57143',
            textOverflow: 'ellipsis',
            WebkitLineClamp: 2,
            overflow: 'hidden'
           }}
          >
            {/* {description} */}
           {/* {destination.description} */}
           {destination.formatted}
          </Typography>
        </Stack>
      </Stack>
      </Stack>
      <Divider sx={{ borderStyle: 'dashed', my: 1 }} />
      <Grid
      container
      spacing={1.5}
      sx={{
        px: 3,
        py: 2,
        marginLeft: 0,
        typography: 'body2',
        color: 'text.secondary',
        textTransform: 'capitalize',
      }}
    >
      {/* <Grid xs={6}>
        <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
          <IoTimeOutline style={{marginRight: 4}}/>
          {destination.openTime}
        </Stack>
      </Grid>

    
      <Grid xs={3}>
        <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
          
          <GiSandsOfTime style={{marginRight: 4}}/>
          {destination.avgSpendTime}
        </Stack>
      </Grid> */}

       <Grid xs={3}>
        <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
        <RiDeleteBinLine size={20} cursor={'pointer'} id={destination.place_id} onClick={handleOnRemove} className='delete-hover'/>
        </Stack>
      </Grid>
    
    </Grid>
  </Card>
  )
}

export default DestinationCard