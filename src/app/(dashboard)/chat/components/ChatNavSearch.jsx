'use client';
import React from 'react'
import { ClickAwayListener, InputAdornment } from '@mui/material';
import { CustomTextField } from '@/components/custom-input';
import HiOutlineMagnifyingGlass from "@react-icons/all-files/hi2/HiOutlineMagnifyingGlass";

const ChatNavSearch = ({ value, onChange, onClickAway }) => {
  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <CustomTextField fullWidth 
      size="small" 
      value={value} 
      onChange={onChange} 
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