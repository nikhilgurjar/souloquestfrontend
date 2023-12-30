import { forwardRef } from 'react';

// @mui
import { Link } from '@mui/material';
import NextLink from "next/link";
// components
// import Iconify from 'src/components/iconify';
//
import { StyledNavItem } from './styles';

// ----------------------------------------------------------------------

export const NavItem = forwardRef(
  ({ item, open, active, subItem, isExternalLink, ...other }, ref) => {
    const { title, path, children } = item;

    const renderContent = (
      <StyledNavItem
        ref={ref}
        disableRipple
        subItem={subItem}
        active={active}
        open={open}
        {...other}
      >
        {title}

        {/* {!!children && <Iconify width={16} icon="carbon:chevron-down" sx={{ ml: 1 }} />} */}
      </StyledNavItem>
    );

    // ExternalLink
    if (isExternalLink) {
      return (
        <Link href={path} target="_blank" rel="noopener" color="inherit" underline="none">
          {renderContent}
        </Link>
      );
    }

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
  }
);
