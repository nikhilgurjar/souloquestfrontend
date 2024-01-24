import { Stack } from '@mui/material'
import React from 'react'

const ChatLayout = ({children}) => {
  return (
    <Stack direction="row" sx={{height:"100%", maxWidth: '100%', pt: '-6px'}}>
        {children}
    </Stack>
  )
}

export default ChatLayout