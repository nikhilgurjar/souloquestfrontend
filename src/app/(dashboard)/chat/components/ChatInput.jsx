'use client';
import { IconButton, InputAdornment, InputBase, Stack } from '@mui/material';
import React from 'react'

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from '@/utils/firebaseConfig';
import { toast } from 'react-toastify';
// Icons import
import {BsSendFill} from "react-icons/bs/BsSendFill";
import {MdOutlineAddPhotoAlternate} from "react-icons/md";
import {HiOutlineEmojiHappy} from "react-icons/hi";


const ChatInput = ({conversationId}) => {
    const fileInputRef = React.useRef(null);
    const [message, setMessage] = React.useState('');
    const handleClickAttach = () => {
      fileInputRef.current?.click();
    };

    const handleSend = async () => {
        if (message.trim() === "") {
            toast.error("Please enter a message");
            return;
        }
        
        if (message && conversationId) {
            await addDoc(collection(db, "messages"), {
                text: message,
                createdAt: serverTimestamp(),
                roomid: conversationId,
                senderId: 'user2',
                
            });
        }
          setMessage('');
      }
    
    const handleKeyDown = async (event) =>{
      event.preventDefault();
      if (event.key === 'Enter') {
        await handleSend()
      }
    }
    

    return (
        <>
        <InputBase 
        value={message}  
        onChange={(event) => setMessage(event.target.value)} 
        placeholder="Type a message" 
        onKeyUp={handleKeyDown}
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          pl: 1,
          height: 56,
          flexShrink: 0,
          borderTop: (theme) => `solid 1px ${theme.palette.divider}`
        }}
        startAdornment={
        <InputAdornment position="start">
              <IconButton size="small">
                <HiOutlineEmojiHappy />
              </IconButton>
            </InputAdornment>
          } 
        
        endAdornment={
        <Stack direction="row" spacing={1} sx={{ flexShrink: 0, mr: 1.5 }}>
            <IconButton  size="small" onClick={handleClickAttach}>
                <MdOutlineAddPhotoAlternate />
            </IconButton>
  
            <IconButton size="small" onClick={handleClickAttach}>
                <MdOutlineAttachFile />
            </IconButton>

            <IconButton size="medium" onClick={handleSend}>
                <BsSendFill />
            </IconButton>

            </Stack>
            
          } 
          
       
          />
  
        <input type="file" ref={fileInputRef} style={{ display: 'none' }}/>
      </>
  )
}

export default ChatInput