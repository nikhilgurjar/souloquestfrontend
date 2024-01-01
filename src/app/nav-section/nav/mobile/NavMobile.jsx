"use client";
import { useState, useEffect } from "react";
// @mui
import { List, Drawer, IconButton, Button, Stack } from "@mui/material";

// config
// import { NAV } from 'src/config-global';
// components
// import Logo from 'src/components/logo';
// import Iconify from 'src/components/iconify';
// import Scrollbar from 'src/components/scrollbar';
//
// import { NavProps } from '../types';
import NavList from "./NavList";
import RxHamburgerMenu from "@react-icons/all-files/rx/RxHamburgerMenu";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

// ----------------------------------------------------------------------

export default function NavMobile({ data }) {
  const pathname = usePathname();
  const session = useSession();
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
        <RxHamburgerMenu />
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
          {session.status === "authenticated" ? (
            <>
              <Button fullWidth variant="contained" color="inherit">
                Login
              </Button>
              <Button fullWidth variant="contained" color="inherit">
                Register
              </Button>
            </>
          ) : (
            <Button fullWidth variant="contained" color="inherit">
              Logout
            </Button>
          )}
        </Stack>
        {/* </Scrollbar> */}
      </Drawer>
    </>
  );
}
