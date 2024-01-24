'use client';
import { Container } from '@mui/material'
import React, { Suspense } from 'react'
import Filters from './components/filter/Filters'
import RequestList from './components/RequestList'
import NewRequest from './components/NewRequest'
import { PartnerFinderProvider } from './components/PartnerContext';

const ParterFinderPage = () => {
  

  return (
    <PartnerFinderProvider>
    <Container >
      <Filters/>
      <Suspense fallback="loading....">
      <RequestList />
      <NewRequest />
      </Suspense>
    </Container>
    </PartnerFinderProvider>
  )
}

export default ParterFinderPage