import { useState } from "react";
// import { useLocation } from "react-router-dom";
// @mui
import { Collapse } from "@mui/material";

// hooks
// import useActiveLink from "src/hooks/useActiveLink";
// components
// import { NavSectionVertical } from "src/components/nav-section";
//
import NavItem from "./NavItem";
import { usePathname } from "next/navigation";

// ----------------------------------------------------------------------

export default function NavList({ item }) {
  const pathname = usePathname();
  const { path } = item;

  return (
    <>
      <NavItem item={item} open={open} active={pathname === path} />
    </>
  );
}
