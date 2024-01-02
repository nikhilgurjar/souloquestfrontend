// @mui
import { Link, ListItemText, ListItemIcon } from "@mui/material";
// components
// import Iconify from 'src/components/iconify';
//
import { StyledNavItem } from "./styles";
import NextLink from "next/link";
// ----------------------------------------------------------------------

export default function NavItem({ item, open, active, ...other }) {
  const { title, path, icon, children } = item;

  const renderContent = (
    <StyledNavItem active={active} {...other}>
      <ListItemIcon> {icon} </ListItemIcon>

      <ListItemText disableTypography primary={title} />
    </StyledNavItem>
  );

  // Has child
  if (children) {
    return renderContent;
  }
console.log(path);
  // Default
  return (
    <Link component={NextLink} href={path} underline="none">
      {renderContent}
    </Link>
  );
}
