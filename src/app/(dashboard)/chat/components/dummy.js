'use client';
import * as React from 'react';
import {useState, useRef, useEffect} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { MdPeopleAlt } from "react-icons/md";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { MdOutlineAddPhotoAlternate, MdOutlineAttachFile  } from "react-icons/md";

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, InputAdornment, ListItemAvatar, Stack, InputBase } from '@mui/material';
import { alpha, useTheme } from '@mui/material';
import { ChatList, conversation } from '@/data';
import Image from '@/components/image';
import useResponsive from '@/hooks/useResponsive';
import { ClickAwayListener } from '@mui/material';
import { CustomTextField } from '@/components/custom-input';
import { CustomAvatar } from '@/components/custom-avatar';
import Scrollbar from '@/components/scrollbar/Scrollbar';

const drawerWidth = 320;
const NAV_WIDTH = 320;
const NAV_COLLAPSE_WIDTH = 96;
export default function ResponsiveDrawer() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isDesktop = useResponsive('up', 'md');
  const isCollapse = isDesktop && !mobileOpen;
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  

  const theme = useTheme();
  
  

  // Remove this const when copying and pasting into your project.
const participantInfo = {
  id: 'user2',
  name: 'Jane Doe',
  avatar: 'https://mui.com/static/images/avatar/1.jpg',
}

  return (
    <Box sx={{ display: 'flex', flexGrow: 1 }}>
   
  
      <ChatNav />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3}}
      >
        <Toolbar />
        <Stack flexGrow={1}>
        <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
          disableRipple
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' },
            left: 10,
            zIndex: 9,
            width: 32,
            height: 32,
            position: 'absolute',
            top: theme.spacing(13),
            borderRadius: `0 12px 12px 0`,
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.primary.main,
            boxShadow: theme.customShadows.primary,
            '&:hover': {
                backgroundColor: theme.palette.primary.darker,
            },
          
          }}
          >
            <MdPeopleAlt />
          </IconButton>
         <ChatHeader participantInfo={participantInfo} />
        </Toolbar>
      </AppBar>
   
        <Stack direction="row" flexGrow={1} sx={{
            overflow: 'hidden'
        }}>
          <Stack flexGrow={1}>
            <ConversationList/>
            <ChatMessageInput conversationId={'room-1'}/>
          </Stack>
          
          </Stack>
          
        </Stack>
      </Box>
    </Box>
    
  );
}

const ChatElement = ({id, img, msg, name, time}) =>{
  const theme = useTheme();
  const isSelected = false;
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
    >

    <ListItemAvatar>
        <Avatar alt="avatar 1" src="https://mui.com/static/images/avatar/1.jpg" sx={{ width: 48, height: 48 }}/>
      </ListItemAvatar>
      <ListItemText primaryTypographyProps={{ noWrap: true, variant: 'subtitle2' }} secondaryTypographyProps={{
                noWrap: true,
                variant: 'body2',
                color: 'text.secondary',
            }}
            primary="Photos" secondary="Jan 9, 2014" />
    <Stack alignItems="flex-end" sx={{ ml: 2, height: 44 }}>
    <Typography noWrap variant="body2" component="span" sx={{
                mb: 1.5,
                fontSize: 12,
                color: 'text.disabled',
            }}>
    6 hours ago
     </Typography>
  
    </Stack>
    </ListItemButton>
  )
}

const ChatHeader = ({participantInfo}) =>{
return (
  <>
  <Stack direction="row" alignItems="center" 
    sx={{
            p: (theme) => theme.spacing(2, 1, 2, 2),
        }}>
  <Stack flexGrow={1} direction="row" alignItems="center" spacing={2}>
  <CustomAvatar src={participantInfo?.avatar} alt={participantInfo?.name} />
  <div>
    <Typography variant="subtitle2">{participantInfo?.name}</Typography>
  </div>
  </Stack>        
  
  </Stack>
          </>
)
}

const ConversationList = ({}) =>{
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
  const onOpenLightbox = () =>{};
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollMessagesToBottom = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    };
    scrollMessagesToBottom();
}, []);
// conversation.messages
// dependency on adding of conversation
return(
  <>
  <Scrollbar scrollableNodeProps={{
            ref: scrollRef,
        }} 
        sx={{ p: 3, height: 1 }}
        >
  {conversation.map(message=><ChatMessageItem message={message} participants={participants} onOpenLightbox={onOpenLightbox}/>)}
  </Scrollbar>
  </>
)
}

const ChatMessageItem = ({ message, participants, onOpenLightbox }) =>{
  console.log(message)
  const sender = participants.find((participant) => participant.id === message.senderId);
  const senderDetails = message.senderId === 'user2'
      ? {
          type: 'me',
      }
      : {
          avatar: sender?.avatar,
          name: sender?.name,
      };
  const currentUser = senderDetails.type === 'me';
  const isImage = message.contentType === 'image';
  const firstName = senderDetails.name && senderDetails.name.split(' ')[0];
  const theme = useTheme();
  console.log(theme.palette)
  return (
  <Stack direction="row" justifyContent={currentUser ? 'flex-end' : 'unset'} sx={{ mb: 3 }}>
    {!currentUser && (<Avatar alt={senderDetails.name} src={senderDetails.avatar} sx={{ width: 32, height: 32, mr: 2 }}/>)}

    <Stack spacing={1} alignItems="flex-start">
      <Typography noWrap variant="caption" sx={{
          color: 'text.disabled',
          ...(!currentUser && {
              mr: 'auto',
          }),
      }}>
        {!currentUser && `${firstName},`} &nbsp;
        {/* {formatDistanceToNowStrict(new Date(message.createdAt), {
          addSuffix: true,
      })} */}
      </Typography>

      <Stack sx={{
          p: 1.5,
          minWidth: 48,
          maxWidth: 320,
          borderRadius: 1,
          overflow: 'hidden',
          typography: 'body2',
          bgcolor: 'background.neutral',
          ...(currentUser && {
              color: 'grey.800',
              bgcolor: 'primary.lighter',
          }),
          ...(isImage && {
              p: 0,
          }),
      }}>
        {isImage ? (
        <Image alt="attachment" src={message.message} onClick={() => onOpenLightbox(message.message)} sx={{
              cursor: 'pointer',
              '&:hover': {
                  opacity: 0.9,
              },
          }}/>) : (message.message)}
      </Stack>
    </Stack>
  </Stack>);
}

const ChatNavSearch = ({ value, onChange, onClickAway }) =>{
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
        }} sx={{ mt: 2.5 }}/>
    </ClickAwayListener>
  )
}


const ChatMessageInput = ({conversationId}) =>{

  const fileInputRef = useRef(null);
  const [message, setMessage] = useState('');
  const handleClickAttach = () => {
      fileInputRef.current?.click();
  };
  const handleSend = (event) => {
      if (event.key === 'Enter') {
          if (onSend && message && conversationId) {
              onSend({
                  conversationId,
                  messageId: uuidv4(),
                  message,
                  contentType: 'text',
                  attachments: [],
                  createdAt: new Date(),
                  senderId: CURRENT_USER_ID,
              });
          }
          setMessage('');
      }
  };
  return (
<>
      <InputBase value={message} 
      onKeyUp={handleSend} 
      onChange={(event) => setMessage(event.target.value)} 
      placeholder="Type a message" 
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
          </Stack>
          
        } 
        
        sx={{
            pl: 1,
            height: 56,
            flexShrink: 0,
            borderTop: (theme) => `solid 1px ${theme.palette.divider}`,
        }} 
        />

      <input type="file" ref={fileInputRef} style={{ display: 'none' }}/>
    </>
  );
}


const ChatNav = () =>{

  const [openNav, setMobileOpen] = React.useState(false);
  const isDesktop = useResponsive('up', 'md');
  const isCollapse = isDesktop && !openNav;

  const [searchContacts, setSearchContacts] = useState('');
  const theme = useTheme()
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
      <Typography variant="h5">Chats</Typography>
      <Stack sx={{ width: "100%" }}>
          <ChatNavSearch onClickAway={() => setSearchContacts('')} value={searchContacts} onChange={handleChangeSearch}  />
            </Stack>
      </Stack>
      <Divider />
      {/* <Stack sx={{ width: '100%'}} alignItems={'center'} direction='column' mt={3}> */}
      <List disablePadding aria-labelledby="Conversations list" sx={{width: '100%'}}>
    
      {ChatList.map(item=><ChatElement/>)}
     
      </List>
 {/* </Stack> */}
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
            top: theme.spacing(13),
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
               
            }}>
          {renderContent}
        </Drawer>) : 
        (
        <Drawer open={openNav} onClose={handleCloseNav} ModalProps={{ keepMounted: true }} PaperProps={{
                sx: {
                    pb: 1,
                    width: NAV_WIDTH,
                },
            }}>
          {renderContent}
        </Drawer>)
        }
        
    
    </>
  )
}