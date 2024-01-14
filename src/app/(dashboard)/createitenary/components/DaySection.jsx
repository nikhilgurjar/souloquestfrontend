'use client';
import React from 'react'
import { Stack, Typography, Card, Box, Collapse } from '@mui/material'
import DestinationAutocomplete from '@/components/custom-input/DestinationAutocomplete';
import { places } from '@/data';
import DestinationCard from './DestinationCard';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from '@/redux/store';
import { addDestination, removeDestination } from '@/redux/slices/itenary';
import RecommendedSection from './RecommendedSection';

const DaySection = ({day, date_trip, dayName}) => {
    const [location, setLocation] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [recommendations, setRecommendations] = React.useState([]);
    const dispatch = useDispatch();
    const destinations = useSelector(state=>state.itenary.itenary)[day-1] || [];

    const getNearbyLocations = async ({lat, long}) =>{
      try {
        const response = await fetch(
          `/api/nearbyPlaces?lat=${lat}&long=${long}`
          // `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.latitude},${location.longitude}&radius=5000&type=restaurant&keyword=restaurant&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`
        );
        const data = await response.json();
        setRecommendations(data);
      } catch (error) {
        toast.error(error)
      }
    }

    const handleChangeLocation = async (keyword) =>{
        try{
      setLocation(keyword || {title: ''});
      if(!keyword.id) return;
      // const placeDetails = await getPlaceDetails(keyword.place_id);
      // setDestinations(prev=> [...prev, keyword]);
      dispatch(addDestination({day: day-1, destination: keyword}))
      getNearbyLocations({lat: keyword.latitude, long: keyword.longitude})
      setLocation(null);
        }
        catch(error){
          toast(error.message || error.error)
        }
    }

    const handleAddSuggestion = async (suggestion) => {
      try{
        console.log(suggestion)
    
    dispatch(addDestination({day: day-1, destination: suggestion}))
      
  }
      catch(error){
        toast(error.message || error.error)
      }
    }

    const handleOpen = (event) => {
      event.preventDefault();
        setOpen((prev) =>!prev);
    };

    const handleRemoveLocation = (id) =>{       
      dispatch(removeDestination({day: day-1, id: id}))
    }

  return (
    <Stack
    direction="column"
    alignItems="flex-start"
    justifyContent="center"
    
    sx={{ width: 1, cursor: 'pointer', py: 2 }}
  >
        
  <Stack direction={'column'} spacing={.5} onClick={handleOpen}>
  <Typography variant='h5' sx={{ color: 'inherit', fontWeight: 700}}>
       {date_trip}, {dayName}
    </Typography>
    <Typography variant='subtitle2' sx={{ color: 'inherit', fontWeight: 400, marginLeft: '6px!important'}}>
        {destinations.length} places
    </Typography>
  </Stack>

  <Collapse unmountOnExit in={open} sx={{
    width:'100%',
    px: 0.5,
    py: 1,
  }}>
        <Stack spacing={2} direction={'column'} sx={{
            my: 2
        }}>
        {destinations.length ===0 && (
            <Typography variant='body2' sx={{ color: 'inherit', fontWeight: 300}}>
                Add a place to your day
            </Typography>
        )}
        {destinations?.map(item=><DestinationCard key={item.id} destination={item} onRemove={handleRemoveLocation}/>)}
        </Stack>
        
      <DestinationAutocomplete placeholder="Add a place" onChange={handleChangeLocation} value={location} />

      <RecommendedSection recommendations={recommendations} onAddRecommendation={handleAddSuggestion}/>
     </Collapse>
    </Stack>
  )
}

export default DaySection