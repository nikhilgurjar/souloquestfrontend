'use client';
import Image from 'next/image'
import React from 'react'
import Box from '@mui/material/Box'
import { Accordion, AccordionSummary, AccordionDetails,  Button, Card, Grid, Select, Stack, Divider, Typography } from '@mui/material'
import { useTheme } from '@mui/material';
import { MdOutlineNavigateNext } from "react-icons/md";
import ItenaryCover from './components/ItenaryCover'
import ExploreSection from './components/ExploreSection';
import CustomAutocomplete from '@/components/custom-input/CustomAutocomplete';
import DaySection from './components/DaySection';

const CreateItenaryPage = () => {


  return (
    <>
   <ItenaryCover />
   <ExploreSection />

   <Box sx={{
        bgcolor: '#f3f4f5',
        marginTop: theme => theme.spacing(5),
        padding: (theme) => theme.spacing(1,4)
      }}>
<Typography variant='h3' sx={{ color: 'inherit', fontWeight: 700}}>
          Itenary
    </Typography>
    <DaySection />
        
      </Box>
   
    
    </>
  )
}

export default CreateItenaryPage