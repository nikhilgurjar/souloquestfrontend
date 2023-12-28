"use client"
import { useState, useEffect } from 'react';
// @mui
import { List, Drawer, IconButton, Button, Stack } from '@mui/material';

// config
// import { NAV } from 'src/config-global';
// components
// import Logo from 'src/components/logo';
// import Iconify from 'src/components/iconify';
// import Scrollbar from 'src/components/scrollbar';
//
// import { NavProps } from '../types';
import NavList from './NavList';
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from 'next/navigation';

// ----------------------------------------------------------------------

export default function NavMobile({ data }) {
  const pathname=usePathname()

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton onClick={handleOpen} sx={{ ml: 1, color: "inherit" }}>
        {/* <Iconify icon="carbon:menu" /> */}
        <RxHamburgerMenu/>
      </IconButton>

      <Drawer
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            pb: 5,
            width: 260,
          },
        }}
      >
        {/* <Scrollbar> */}
        {/* <Logo sx={{ mx: 2.5, my: 3 }} /> */}

        <List component="nav" disablePadding>
          {data.map((link) => (
            <NavList key={link.title} item={link} />
          ))}
        </List>

        <Stack spacing={1.5} sx={{ p: 3 }}>
          <Button fullWidth variant="contained" color="inherit">
            Buy Now
          </Button>
        </Stack>
        {/* </Scrollbar> */}
      </Drawer>
    </>
  );
}
