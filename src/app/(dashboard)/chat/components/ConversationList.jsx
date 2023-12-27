'use client';
import React from 'react'
import MessageItem from './MessageItem';
import { Box } from '@mui/material';
import { useSelector } from '@/redux/store';
import { collection, limit, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { db } from '@/utils/firebaseConfig';

const participants = [
    {
      id: 'user2',
      name: 'Jane Doe',
      avatar: 'https://mui.com/static/images/avatar/1.jpg',
    },
    {
      id: 'user1',
      name: 'Michell Banner',
      avatar: 'https://mui.com/static/images/avatar/2.jpg',
    },
    {
      id: 'user3',
      name: 'Doe John',
      avatar: 'https://mui.com/static/images/avatar/3.jpg',
    }
  ]
const ConversationList = () => {
    
  const [messages, setMessage] = React.useState([]);
    const onOpenLightbox = () =>{};
    const scrollRef = React.useRef(null);
    const conversationListRef = collection(db,  'messages');
    const selectedConversation = useSelector(state=>state.conversation.selectedRoomId)

    React.useEffect(()=>{
      console.log(selectedConversation);
        const queryRooms = query(conversationListRef, where('roomid', '==', selectedConversation), orderBy("createdAt", "asc"));
        onSnapshot(queryRooms, (snapshot)=>{
            let messages = [];
            snapshot.forEach((doc)=>{
              const data = doc.data();
              messages.push({...data, id: doc.id})
            });
            setMessage(messages);
        })
    },[selectedConversation]);

  return (
    <Box sx={{ p: 3 }}>
      {messages?.map(message=><MessageItem key={message.id} message={message} participants={participants} onOpenLightbox={onOpenLightbox}/>)}
      </Box>
  )
}

export default ConversationList