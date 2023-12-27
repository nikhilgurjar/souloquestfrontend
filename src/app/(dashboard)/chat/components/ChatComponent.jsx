'use client';
import React from 'react'
import ChatHeader from './ChatHeader'
import ConversationList from './ConversationList'
import ChatInput from './ChatInput'
import { Stack } from '@mui/material'
import { useSelector } from '@/redux/store'

const ChatComponent = () => {
    const selectedConversation = useSelector(state=>state.conversation.selectedRoomId)
  return (
    <>
    { selectedConversation && (
      <Stack flexGrow={1} position={"relative"}>
      {/* chat header */}
      <ChatHeader conversationId={selectedConversation}/>
    <Stack direction="row" flexGrow={1} 
       sx={{
            overflow: 'hidden'
            }}>
              <Stack flexGrow={1} sx={{
                overflow: 'scroll'
              }}>
                <ConversationList />
                <ChatInput conversationId={selectedConversation}/>
              </Stack>
    </Stack>
    </Stack>
    )}
    </>
  )
}

export default ChatComponent