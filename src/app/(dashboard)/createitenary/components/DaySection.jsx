'use client';
import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Stack, Typography, Card, Box } from '@mui/material'
import { MdOutlineNavigateNext } from "react-icons/md";
import CustomAutocomplete from '@/components/custom-input/CustomAutocomplete';
import { places } from '@/data';
import DestinationCard from './DestinationCard';
import SuggestionCard from './SuggestionCard';
import RecommendedSection from './RecommendedSection';

const DaySection = () => {
    const [location, setLocation] = React.useState({title: ''});
    const [destinations, setDestinations] = React.useState([]);
    const [recommendations, setRecommendations] = React.useState(places);
    const handleChangeLocation = (keyword) =>{
        console.log(keyword?.title)
      setLocation(keyword || {title: ''});
      keyword?.title && setDestinations(prev => [...prev, keyword])
    }

    const handleRemoveLocation = (id) =>{
        console.log(id)
       
        const newData = destinations.filter(item=> item.id!==+id);
        console.log(newData)
      setDestinations(newData);
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
        maxWidth: 544, 
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
        Wednesday, November 15th
    </Typography>
    <Typography variant='subtitle2' sx={{ color: 'inherit', fontWeight: 400, marginLeft: '6px!important'}}>
        5 places
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

      <RecommendedSection recommendations={recommendations}/>
      </AccordionDetails>
    </Accordion>
  )
}

export default DaySection