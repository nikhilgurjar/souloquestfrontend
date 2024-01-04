'use client';
import { AppBar, Box, Divider, Drawer,DrawerHeader, IconButton, ListItemButton, Toolbar, Typography, ClickAwayListner, Stack, ListItemIcon, ListItemText, List } from '@mui/material';
import React, { useEffect } from 'react'
import { CgMenuRightAlt } from "react-icons/cg";
import Sidebar from './components/Sidebar';
import { useDispatch, useSelector } from '@/redux/store';
import { logInUser } from '@/redux/slices/user';
import { get_profile } from '@/actions/auth';
import {router } from 'next/navigation'
const DashboardLayout = ({children}) => {
    const [open, setOpen] = React.useState(false);
    const user = useSelector(state=> state.user.user);
    const dispatch = useDispatch();

    useEffect(()=>{
      console.log(user);
      if(!user){
        get_profile().then(response=>{
          dispatch(logInUser({user: response.user}))  
        }).catch(error=>{
          console.log(error);
          router.push('/login');
        });
        
      }
    },
    [user])
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
  return (
    <>
    <AppBar position="fixed" open={open} sx={{ height: 64}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <CgMenuRightAlt />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
        </Toolbar>
    </AppBar>

     
    
        
        <Box sx={{
               
                minHeight: 1,
            }}
        >
           <Sidebar open={open} handleDrawerClose={handleDrawerClose}/>
        <Box component="main" sx={{ flexGrow: 1, pt: '70px', height: '100vh' }}>{children}</Box>
        </Box>
    </>
    
    )
}



export default DashboardLayout