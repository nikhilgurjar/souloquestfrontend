'use client';
import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Stack, Typography, Card, Box } from '@mui/material'
import MdOutlineNavigateNext from "@react-icons/all-files/md/MdOutlineNavigateNext";
import CustomAutocomplete from '@/components/custom-input/CustomAutocomplete';
import { places } from '@/data';
import DestinationCard from './DestinationCard';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from '@/redux/store';
import { addDestination, removeDestination } from '@/redux/slices/itenary';

const DaySection = ({day}) => {
    const [location, setLocation] = React.useState(null);
    const [recommendations, setRecommendations] = React.useState(places);
    const dispatch = useDispatch();
    const destinations = useSelector(state=>state.itenary.itenary)[day-1] || [];
    const handleChangeLocation = async (keyword) =>{
        try{
          console.log(keyword)
      setLocation(keyword || {title: ''});
      if(!keyword.place_id) return;
      // const placeDetails = await getPlaceDetails(keyword.place_id);
      // setDestinations(prev=> [...prev, keyword]);
      dispatch(addDestination({day: day-1, destination: keyword}))
      setLocation(null);
        }
        catch(error){
          toast(error.message || error.error)
        }
    }

    const handleRemoveLocation = (id) =>{
        console.log(id)
       
        // const newData = destinations.filter(item=> item.place_id!==id);
        // console.log(newData)
      // setDestinations(newData);
      dispatch(removeDestination({day: day-1, id: id}))
    }

    const onAddRecommendation = (event) =>{
        event.preventDefault();
        const id = event.currentTarget.id;
        const newPlace = places.find(item=> item.id===+id);
        setDestinations(prev => [...prev, newPlace])
    }
console.log(destinations);
  return (
    <Accordion
    defaultExpanded
    disableGutters 
    TransitionProps={{ unmountOnExit: true }}  
    elevation={0} 
    square  
    sx={{
        maxWidth: 'clamp(50%, 650px, 100%)', 
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&::before': {
        display: 'none',
      },
      "&.Mui-expanded": {
          boxShadow: "none", // Remove box shadow
          borderRadius: 0, // Remove border radius
          backgroundColor: "transparent", // Set background color
        },
      width: '100%'
    }}
    style={{ boxShadow: "none" }} >
      <AccordionSummary 
      expandIcon={<MdOutlineNavigateNext sx={{ fontSize: '0.9rem', marginRight: '20px' }} />}
      sx={{
        bgcolor: 'transparent',
        flexDirection: 'row-reverse',
        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
          transform: 'rotate(90deg)',
        },
        '& .MuiAccordionSummary-content': {
          marginLeft: theme => theme.spacing(1),
        },
      }}
      >
        
  <Stack direction={'column'} spacing={.5}>
  <Typography variant='h5' sx={{ color: 'inherit', fontWeight: 700}}>
        Day {day}
    </Typography>
    <Typography variant='subtitle2' sx={{ color: 'inherit', fontWeight: 400, marginLeft: '6px!important'}}>
        {destinations.length} places
    </Typography>
  </Stack>

      </AccordionSummary>
      <AccordionDetails>
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
        
      <CustomAutocomplete placeholder="Add a place" onChange={handleChangeLocation} value={location} options={places} />

      {/* <RecommendedSection recommendations={recommendations}/> */}
      </AccordionDetails>
    </Accordion>
  )
}

export default DaySection