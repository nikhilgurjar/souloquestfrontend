'use client';
import React from 'react'
import { signOut } from "next-auth/react";
import {  ListItemButton, ListItemIcon, ListItemText, List } from '@mui/material';
import { PiSignOutBold } from "react-icons/pi";
import {router} from 'next/navigation';

const SignOutButton = () => {

    const handleClick = () =>{
        signOut({ redirect: false }).then(() => {
            router.push('/login');
        })
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
    >
      <ListItemIcon><PiSignOutBold size={22} onClick={handleClick}/>
      </ListItemIcon>
    <ListItemText primaryTypographyProps={{ noWrap: true, variant: 'body1' }} primary="Sign Out" />
    </ListItemButton>
  )
}

export default SignOutButton