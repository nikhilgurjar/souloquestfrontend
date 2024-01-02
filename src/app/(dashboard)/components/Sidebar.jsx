import React from 'react'
import {IoArrowBackCircle} from "react-icons/io5";
import {IoIosPeople} from "react-icons/io";
import {MdMessage} from "react-icons/md";
import {CgProfile} from "react-icons/cg";
import Link from 'next/link';
import {  Divider, Drawer, ListItemButton, Toolbar, Typography, ClickAwayListner, Stack, ListItemIcon, ListItemText, List } from '@mui/material';
import SignOutButton from './SignOutButton';


const NavListItems =  [
  {
      id: 2,
      name: 'Profile',
      icon: <CgProfile size={22} />,
      link: '/profile',
      subNav: null
  },
  {
      id: 1,
      name: 'Find Partner',
      icon: <IoIosPeople size={22} />,
      link: '/findpartner',
      subNav: null
  },
  
  {
      id: 3,
      name: 'Messenger',
      icon: <MdMessage size={22} />,
      link: '/chat',
      subNav: null
  },
]

const SideNavList = () =>{
  return (
      <>
      {
          NavListItems.map((navItem)=>{
              return (
                  <ListItemButton disableGutters
                  sx={{
                      py: 1.5,
                      px: 3.5,
                      "&:hover": {
                          cursor: "pointer",
                        }
                  }}
                  component={Link}
                  href={navItem.link}
                  key={navItem.id}
                  >
                  <ListItemIcon>
                      {navItem.icon}
                  </ListItemIcon>
                  <ListItemText 
                primaryTypographyProps={{ noWrap: true, variant: 'body1' }} 
                primary={navItem.name}
                />
                  </ListItemButton>
              )
          })
      }
      </>
     
  )
}

const Sidebar = ({open, handleDrawerClose}) => {
  
  return (
    <Drawer
    sx={{
      width: 320,
      flexShrink: 0,
      p: (theme) => theme.spacing(1,2),
      '& .MuiDrawer-paper': {
        width: 320,
        boxSizing: 'border-box',
      },
    }}
    
    anchor="left"
    open={open}
  >
    <Stack direction="row" justifyContent={'space-between'} sx={{
        width:'100%',
        p: 3
    }}>
    <Typography variant="h6" noWrap component="div">
        S O U L O Q U E S T
      </Typography>
    <IoArrowBackCircle size={24} onClick={handleDrawerClose}/>
    </Stack>

    <Divider/>
    <List>
   <SideNavList/>
   <SignOutButton />
    </List>
    
    </Drawer>
  )
}

export default Sidebar