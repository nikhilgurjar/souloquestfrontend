"use client";
import { usePathname } from "next/navigation";
import { NavItem } from "./NavItem";

// ----------------------------------------------------------------------

export default function NavList({ item }) {
  const pathname = usePathname();
  console.log(pathname);
  const { path } = item;
  console.log(path);
  // console.log(isActive);
  return <NavItem item={item} active={pathname === path} />;
}
