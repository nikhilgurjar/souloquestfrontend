'use client';
import React from 'react'
import { useTheme, Stack, Typography, Avatar,  } from '@mui/material';
import Image from '@/components/Image';
const MessageItem = ({ message, participants, onOpenLightbox }) => {
    const sender = participants.find((participant) => participant.id === message.senderId);
    const senderDetails = message.senderId === 'user2'
      ? {
          type: 'me',
      }
      : {
          avatar: sender?.avatar,
          name: sender?.name,
      };
      const currentUser = senderDetails.type === 'me';
      const isImage = message.contentType === 'image';
      const firstName = senderDetails.name && senderDetails.name.split(' ')[0];
      const theme = useTheme();
    return (
        <Stack direction="row" justifyContent={currentUser ? 'flex-end' : 'unset'} sx={{ mb: 3 }}>
        {!currentUser && (<Avatar alt={senderDetails.name} src={senderDetails.avatar} sx={{ width: 32, height: 32, mr: 2 }}/>)}
    
        <Stack spacing={1} alignItems="flex-start">
          <Typography noWrap variant="caption" sx={{
              color: 'text.disabled',
              ...(!currentUser && {
                  mr: 'auto',
              }),
          }}>
            {!currentUser && `${firstName},`} &nbsp;
            {/* {formatDistanceToNowStrict(new Date(message.createdAt), {
              addSuffix: true,
          })} */}
          </Typography>
    
          <Stack sx={{
              p: 1.5,
              minWidth: 48,
              maxWidth: 320,
              borderRadius: 1,
              overflow: 'hidden',
              typography: 'body2',
              bgcolor: 'background.neutral',
              ...(currentUser && {
                  color: 'grey.800',
                  bgcolor: 'primary.lighter',
              }),
              ...(isImage && {
                  p: 0,
              }),
          }}>
            {isImage ? (
            <Image alt="attachment" src={message.text} onClick={() => onOpenLightbox(message.message)} sx={{
                  cursor: 'pointer',
                  '&:hover': {
                      opacity: 0.9,
                  },
              }}/>) : (message.text)}
          </Stack>
        </Stack>
      </Stack>
  )
}

export default MessageItem