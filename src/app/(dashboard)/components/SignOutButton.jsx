'use client';
import React from 'react'
import {  ListItemButton, ListItemIcon, ListItemText, List } from '@mui/material';
import { PiSignOutBold } from "react-icons/pi";
import { clearAllCookies } from '@/actions/auth';
import {router} from 'next/navigation';

const SignOutButton = () => {

 

    const handleClick = async () =>{
        localStorage.clear();
        sessionStorage.clear();
        clearAllCookies().then(resp=>{
          console.log(resp);
          router.push('/login');
        }).catch(error=>{
          console.log(error);
        });

    }
  return (
    <ListItemButton disableGutters
    sx={{
        py: 1.5,
        px: 3.5,
        "&:hover": {
            cursor: "pointer",
          }
    }}
    onClick={handleClick}
    >
      <ListItemIcon>
        <PiSignOutBold size={22} />
      </ListItemIcon>
    <ListItemText primaryTypographyProps={{ noWrap: true, variant: 'body1' }} primary="Sign Out" />
    </ListItemButton>
  )
}

export default SignOutButton