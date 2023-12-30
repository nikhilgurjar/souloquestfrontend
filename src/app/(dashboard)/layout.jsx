'use client';
import { AppBar, Box, Divider, Drawer,DrawerHeader, IconButton, ListItemButton, Toolbar, Typography, ClickAwayListner, Stack, ListItemIcon, ListItemText, List } from '@mui/material';
import React from 'react'
import { CgMenuRightAlt } from "@react-icons/all-files/cg";
import { IoArrowBackCircle } from "@react-icons/all-files/io5";
import { IoIosPeople } from "@react-icons/all-files/io";
import { MdMessage } from "@react-icons/all-files/md";
import { CgProfile } from "@react-icons/all-files/cg";
import Link from 'next/link';
import Sidebar from './components/Sidebar';

const DashboardLayout = ({children}) => {
    const [open, setOpen] = React.useState(false);
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