'use client';
import React from 'react'
import { ClickAwayListener, InputAdornment } from '@mui/material';
import { CustomTextField } from '@/components/custom-input';
import {HiOutlineMagnifyingGlass} from "react-icons/hi2";
import { useChat } from './ChatContext';
import axios from 'axios';

const ChatNavSearch = () => {
  const { chatList, setChatList, selectConversation, keywordFilter ,setKeywordFilter } = useChat();
  
  return (
    <ClickAwayListener onClickAway={()=>setKeywordFilter('')}>
      <CustomTextField fullWidth 
      size="small" 
      value={keywordFilter} 
      onChange={(e)=>setKeywordFilter(e.target.value)} 
      placeholder="Search contacts..." 
      InputProps={{
            startAdornment: (
            <InputAdornment position="start">
              <HiOutlineMagnifyingGlass sx={{ color: 'text.disabled' }}/>
            </InputAdornment>),
        }} 
        sx={{ mt: 2.5 }}
        />
    </ClickAwayListener>
  )
}

export default ChatNavSearch