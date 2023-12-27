'use client'
import { Container } from '@mui/material'
import React from 'react'
import Filters from './components/filter/Filters'
import RequestList from './components/RequestList'
import NewRequest from './components/NewRequest'

const ParterFinderPage = () => {
  

  return (
    <Container >
      <Filters/>
      <RequestList />
      <NewRequest />
    </Container>
  )
}

export default ParterFinderPage