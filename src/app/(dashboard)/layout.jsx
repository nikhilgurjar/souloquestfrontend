"use client";
import {
  Box,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "@/redux/store";
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
