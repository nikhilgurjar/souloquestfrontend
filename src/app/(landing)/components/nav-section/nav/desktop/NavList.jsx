"use client";
import { usePathname } from "next/navigation";
import { NavItem } from "./NavItem";

// ----------------------------------------------------------------------

export default function NavList({ item }) {
  const pathname = usePathname();
  const { path } = item;
  // console.log(isActive);
  return <NavItem item={item} active={pathname === path} />;
}
