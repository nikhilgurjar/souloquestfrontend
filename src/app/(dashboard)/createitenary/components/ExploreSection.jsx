import React from 'react'
import Box from '@mui/material/Box'
import { Accordion, AccordionDetails, AccordionSummary, Button, Stack,  Typography } from '@mui/material'
import FiSearch from "@react-icons/all-files/fi/FiSearch";
import MdOutlineNavigateNext from "@react-icons/all-files/md/MdOutlineNavigateNext";
import ExploreItem from './ExploreItem';

const ExploreSection = () => {
  // https://zone-ui.vercel.app/marketing/case-study/
  return (
    <Box sx={{
        bgcolor: '#f3f4f5',
        marginTop: theme => theme.spacing(5),
        padding: (theme) => theme.spacing(1,4)
      }}>
        
      
      <Accordion
      
      disableGutters TransitionProps={{ unmountOnExit: true }}  elevation={0} square  sx={{
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
      style={{ boxShadow: "none" }}
  
      >
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
         
          '& .MuiPaper-root-MuiAccordion-root.Mui-expanded':{
            boxShadow: 'none!'
          },
        }}
        style={{ boxShadow: "none" }}
        >
          <Stack direction='row' justifyContent={'space-between'} sx={{ width: '100%'}}>
             <Typography variant='h5' sx={{ color: 'inherit', fontWeight: 700}}>
          Explore
        </Typography>
        <Button variant="contained" color='secondary' size='medium'>
         <FiSearch style={{marginRight: '5px'}}/> 
         <Typography variant='subtitle2'>
         Browse all 
         </Typography>
        </Button>
      </Stack>
        </AccordionSummary>
        <AccordionDetails>
            <ExploreItem />
        </AccordionDetails>
      </Accordion>
      </Box>
  )
}

export default ExploreSection