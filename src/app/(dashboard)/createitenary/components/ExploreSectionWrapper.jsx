'use client';
import { Collapse, Stack, Typography } from '@mui/material'
import React from 'react'

const ExploreSectionWrapper = ({ children }) => {
    const [checked, setChecked] = React.useState(true);
    
    const handleOpen = () => {
    setChecked((prev) => !prev);

};

return (
    <Stack alignItems="flex-start" sx={{ width: 1, py: 5 }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        onClick={handleOpen}
        sx={{ width: 1, cursor: 'pointer' }}
      >
        <Typography variant="h6">Explore Itenaries</Typography>


      </Stack>

      <Collapse unmountOnExit in={checked} sx={{ px: 0.5 }}>
        {children}
      </Collapse>
    </Stack>
  )
}

export default ExploreSectionWrapper