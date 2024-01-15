'use client';
import { Container } from '@mui/material'
import React, { Suspense } from 'react'
import Filters from './components/filter/Filters'
import RequestList from './components/RequestList'
import NewRequest from './components/NewRequest'

const ParterFinderPage = () => {
  

  return (
    <Container >
      <Filters/>
      <Suspense fallback="loading....">
      <RequestList />
      <NewRequest />
      </Suspense>
    </Container>
  )
}

export default ParterFinderPage