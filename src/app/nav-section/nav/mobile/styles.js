// @mui
import { styled, alpha } from '@mui/material/styles';
import { ListItemButton } from '@mui/material';
// config
// import { NAV } from 'src/config-global';
//

// ----------------------------------------------------------------------


export const StyledNavItem = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'active',
})(({ active, theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  height: 48,
  // Active
  ...(active && {
    color: theme.palette.primary.main,
    ...theme.typography.subtitle2,
    backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
  }),
}));
