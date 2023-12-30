'use client';
import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails,  Button, Card, Grid, Select, Stack, Divider, Typography, Container } from '@mui/material'

import ItenaryCover from './components/ItenaryCover'
import ExploreSection from './components/ExploreSection';
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