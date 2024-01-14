'use client';
import React from 'react'
import { Stack, Typography, ListItemButton,  ListItemText, Avatar, ListItemAvatar, } from '@mui/material';
import { SetCurrentConversation } from '@/redux/slices/conversation';
import { useDispatch, useSelector } from '@/redux/store';
import dayjs from 'dayjs';

const ChatElement = ({ conversation }) => {
  const dispatch = useDispatch();
  const room_id = useSelector((state) => state.conversation.selectedRoomId)?._id;
  const selectedChatId = room_id?.toString();

  let isSelected = +selectedChatId === conversation._id;

  if (!selectedChatId) {
    isSelected = false;
  }
  const handleSelectChat = (event) =>{
    event.preventDefault();
    dispatch(SetCurrentConversation({current_conversation: conversation}));
  };
  return (
    <ListItemButton disableGutters 
    sx={{
      py: 1.5,
      px: 2.5,
      ...(isSelected && {
          bgcolor: 'action.selected',
      }),

      "&:hover": {
          cursor: "pointer",
        },
    }}
    id={conversation._id}
    onClick={handleSelectChat}
    >

    <ListItemAvatar>
        <Avatar alt={conversation.name} src={conversation.avatar} sx={{ width: 48, height: 48 }}/>
      </ListItemAvatar>
      <ListItemText 
      primaryTypographyProps={{ noWrap: true, variant: 'subtitle2' }} 
      secondaryTypographyProps={{
                noWrap: true,
                variant: 'body2',
                color: 'text.secondary',
            }}
      primary={conversation.name} 
      secondary={`${conversation.participants?.length} travellers`} 
      />
    <Stack alignItems="flex-end" sx={{ ml: 2, height: 44 }}>
    <Typography noWrap variant="body2" component="span" sx={{
                mb: 1.5,
                fontSize: 12,
                color: 'text.disabled',
            }}>
    {dayjs(conversation.created_at).format('DD MMM YYYY')}
     </Typography>
  
    </Stack>
    </ListItemButton>
  )
}

export default ChatElement