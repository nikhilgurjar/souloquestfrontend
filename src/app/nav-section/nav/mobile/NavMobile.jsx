"use client";
import { useState, useEffect } from "react";
// @mui
import {
  List,
  Drawer,
  IconButton,
  Button,
  Stack,
  Divider,
} from "@mui/material";
import NavList from "./NavList";
// import RxHamburgerMenu from "@react-icons/all-files/rx/RxHamburgerMenu";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import Scrollbar from "@/components/scrollbar/Scrollbar";
import Logo from "@/components/Logo/Logo";

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
        <Scrollbar>
          {/* <Logo sx={{ mx: 2.5, my: 3 }} /> */}
          <Logo sx={{ mx: 6, my: 3, display: "block" }} />
          <Divider />
          <List component="nav" disablePadding>
            {data.map((link) => (
              <NavList key={link.title} item={link} />
            ))}
          </List>

          {session ? (
            <Stack spacing={1.5} sx={{ p: 3 }}>
              <Button fullWidth variant="contained" color="inherit">
                Log In
              </Button>
              <Button fullWidth variant="contained" color="inherit">
                Sign Up
              </Button>
            </Stack>
          ) : (
            <Button fullWidth variant="contained" color="inherit">
              Log Out
            </Button>
          )}
        </Scrollbar>
      </Drawer>
    </>
  );
}
