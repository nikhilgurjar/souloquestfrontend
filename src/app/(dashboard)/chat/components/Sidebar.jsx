'use client';
import useResponsive from '@/hooks/useResponsive';
import { Drawer, IconButton, useTheme } from '@mui/material';
import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Typography, Stack, Divider } from '@mui/material';
import { IoArrowBackCircle } from "react-icons/io5";

import ChatNavSearch from './ChatNavSearch';
import { MdPeopleAlt } from "react-icons/md";
import ContactList from './ContactList';
import { useDispatch } from '@/redux/store';
import { SetCurrentConversation } from '@/redux/slices/conversation';

const NAV_WIDTH = 320;

const ChatSidebar = () => {
    
    const [openNav, setMobileOpen] = React.useState(false);
    const isDesktop = useResponsive('up', 'sm');
    const isCollapse = isDesktop && !openNav;
    const dispatch = useDispatch()
    const [searchContacts, setSearchContacts] = useState('');
    const theme = useTheme();

    const handleChangeSearch = async (event) => {
      try {
          const { value } = event.target;
          setSearchContacts(value);
          if (value) {
              // const response = await axios.get('/api/chat/search', {
              //     params: { query: value },
              // });
              setSearchResults([]);
          }
          else {
              setSearchResults([]);
          }
      }
      catch (error) {
          console.error(error);
      }
  };
  
  
    const handleCloseNav = () => {
      setMobileOpen(!openNav);
    };


    const renderContent = (
        <Box>
          <Stack direction={'column'} alignItems={'flex-start'} p={3} textAlign={'left'} spacing={2} sx={{ maxHeight: "100vh" }}>
          <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{ width: '100%'}} >
          <Typography variant="h5">Chats</Typography>
          {!isDesktop && <IoArrowBackCircle size={24} onClick={handleCloseNav}/>}
          </Stack>
          <Stack sx={{ width: "100%" }}>
              <ChatNavSearch onClickAway={() => setSearchContacts('')} value={searchContacts} onChange={handleChangeSearch}  />
          </Stack>
          </Stack>
          <Divider />
          <ContactList/>
        </Box>
    );

  return (
    <>
    {!isDesktop && (  
     <IconButton
        disableRipple
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleCloseNav}
        sx={{ 
            mr: 2, 
            display: { sm: 'none' },
            left: 10,
            zIndex: 9,
            width: 32,
            height: 32,
            position: 'absolute',
            top: theme.spacing(22),
            borderRadius: `0 12px 12px 0`,
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.primary.main,
            boxShadow: theme.customShadows.primary,
            '&:hover': {
                backgroundColor: theme.palette.primary.darker,
            },
          }}
          >
            <MdPeopleAlt width={16}/>
          </IconButton>
          ) }

    {isDesktop ? (
      <Drawer 
      variant="permanent" 
      PaperProps={{
            sx: {
                pb: 1,
                width: 1,
                position: 'static',
            },
        }} 
        
        sx={{
            width: NAV_WIDTH,
            transition: theme.transitions.create('width'),
        }}

        >
            {renderContent}
    </Drawer>
    ) : 
    (
    <Drawer 
       open={openNav} 
       onClose={handleCloseNav} 
       ModalProps={{ keepMounted: true }} 
       PaperProps={{
            sx: {pb: 1,
                width: NAV_WIDTH,
            },
            }}>
                {renderContent}
    </Drawer>
    )
}
    </>
  
  )
}

export default ChatSidebar