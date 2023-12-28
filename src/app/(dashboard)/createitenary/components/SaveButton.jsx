import { LoadingButton } from '@mui/lab'
import { Stack } from '@mui/material'
import React from 'react'

const SaveButton = () => {
  return (
    <Stack alignItems={'center'} mt={6}>
        <LoadingButton 
        color="primary"
        size="large"
        type="submit"
        variant="contained"
        >
            Save Itenary
        </LoadingButton>
    </Stack>
  )
}

export default SaveButton