'use client';
import React from 'react'
import { Stack, Typography } from '@mui/material'
import { CustomAvatar } from '@/components/custom-avatar'
import { useSelector } from '@/redux/store';
const ChatHeader = ({conversationId}) => {

  const participantInfo = useSelector(state=>state.conversation.selectedRoomId)
  
  return (
    <Stack direction="row" alignItems="center" 
    sx={{
            p: (theme) => theme.spacing(2, 1, 2, 2),
            bgcolor: 'primary.main'
        }}>
  <Stack flexGrow={1} direction="row" alignItems="center" spacing={2}>
  <CustomAvatar src={participantInfo?.avatar} alt={participantInfo?.name} />
  <div>
    <Typography variant="subtitle2" sx={{
        color: 'text.primary'
    }}>{participantInfo?.name}</Typography>
  </div>
  </Stack>        
  
  </Stack>
  )
}

export default ChatHeader