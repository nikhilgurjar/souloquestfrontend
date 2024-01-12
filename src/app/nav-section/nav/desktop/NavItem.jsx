import { forwardRef } from "react";
// @mui
import { Link } from "@mui/material";
import NextLink from "next/link";
import { StyledNavItem } from "./styles";

// ----------------------------------------------------------------------

export const NavItem = forwardRef(({ item, active, ...other }, ref) => {
  const { title, path, children } = item;
  // console.log(active);
  const renderContent = (
    <StyledNavItem ref={ref} disableRipple {...other} active={active}>
      {title}
    </StyledNavItem>
  );

  // Has child
  if (children) {
    return renderContent;
  }

  // Default
  return (
    <Link component={NextLink} href={path} color="inherit" underline="none">
      {renderContent}
    </Link>
  );
});
