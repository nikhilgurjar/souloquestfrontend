'use client'
import React from 'react'
import TravelFilterLocation from './TravelFilterLocation';
import { Button, Divider, Stack } from '@mui/material';
import TravelFilterTime from './TravelFilterTime';
import {FiSearch} from "react-icons/fi";
import { useDispatch, useSelector } from '@/redux/store';
import { setDepartureDate, setFetchedPartnerRequest, setLocation } from '@/redux/slices/partner';
import { fetchPartnerRequests } from '@/actions/partnerFinder';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';


const Filters = () => {
    const dispatch = useDispatch()

    const departureDate = useSelector(state=>state.partnerFinder.departureDate)
    const location = useSelector(state=>state.partnerFinder.location)

    const handleChangeDepartureDay = (newValue) => {
      console.info(newValue)
        dispatch(setDepartureDate({departureDate: newValue}))
    };

    const handleLocationChange = (value) => {
        dispatch(setLocation({location: value.label}))
    };

    const handleSubmission = async () =>{
        try {
            const response = await fetchPartnerRequests({departureDate: dayjs(departureDate).format('YYYY-MM-DD'), location: location.label });
            dispatch(setFetchedPartnerRequest({ requests: response.requests }));
            if((response?.requests || []).length === 0){
              toast.info('No requests Found')
            }
        } catch (error) {
            toast.error(error)
        }
        
    }

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
<TravelFilterLocation onLocationChange = {handleLocationChange} location={location} />
<Divider flexItem orientation="vertical" />
<TravelFilterTime handleChangeDepartureDay={handleChangeDepartureDay} departureDate={departureDate}/>
<Divider flexItem orientation="vertical" />

<Button
        size="large"
        color="secondary"
        variant="contained"
        sx={{
          px: 0,
          flexShrink: 0,
          minWidth: { xs: 1, md: 48 },
        }}
        onClick={handleSubmission}
      >
        <FiSearch />
      </Button>
    </Stack>
  )
}

export default Filters