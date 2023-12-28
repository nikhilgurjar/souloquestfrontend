'use client';
import Image from 'next/image'
import React from 'react'
import Box from '@mui/material/Box'
import { Accordion, AccordionSummary, AccordionDetails,  Button, Card, Grid, Select, Stack, Divider, Typography, Container } from '@mui/material'
import { useTheme } from '@mui/material';
import { MdOutlineNavigateNext } from "react-icons/md";
import ItenaryCover from './components/ItenaryCover'
import ExploreSection from './components/ExploreSection';
import CustomAutocomplete from '@/components/custom-input/CustomAutocomplete';
import DaySection from './components/DaySection';
import ItenarySection from './components/ItenarySection';
import SaveButton from './components/SaveButton';

const CreateItenaryPage = () => {


  return (
    <Container maxWidth={'lg'}>
   <ItenaryCover />
   <ExploreSection />
   <ItenarySection />
    <SaveButton />
    </Container>
  )
}

export default CreateItenaryPage