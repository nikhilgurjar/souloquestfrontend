"use client";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  DrawerHeader,
  IconButton,
  ListItemButton,
  Toolbar,
  Typography,
  ClickAwayListner,
  Stack,
  ListItemIcon,
  ListItemText,
  List,
} from "@mui/material";
import React, { useEffect } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import Sidebar from "./components/Sidebar";
import { useDispatch, useSelector } from "@/redux/store";
import { logInUser } from "@/redux/slices/user";
import { get_profile } from "@/actions/auth";
import { useRouter } from "next/navigation";

const DashboardLayout = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const router= useRouter();
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
     <Box component="main" sx={{ flexGrow: 1, pt: "70px" }} className="min-h-[162vh]">
          {children}
        </Box>
      </>
  );
};

export default DashboardLayout;
