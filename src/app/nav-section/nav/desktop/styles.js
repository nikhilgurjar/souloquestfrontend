// @mui
import { styled } from "@mui/material/styles";
import { Paper, ListSubheader, ListItemButton } from "@mui/material";
//

// ----------------------------------------------------------------------

export const StyledNavItem = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== "active",
})(({ active, theme }) => {
  const dotActiveStyle = {
    content: '""',
    borderRadius: "50%",
    position: "absolute",
    width: 6,
    height: 6,
    left: -12,
    backgroundColor: theme.palette.primary.main,
  };

  return {
    ...theme.typography.body2,
    padding: 0,
    height: "100%",
    fontWeight: 500,
    transition: theme.transitions.create("opacity", {
      duration: theme.transitions.duration.shorter,
    }),
    "&:hover": {
      // opacity: 0.8,
      color: "#008080",
      backgroundColor: "transparent",
      "&::before": dotActiveStyle,
    },

    // Active
    ...(active && {
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightSemiBold,
      "&::before": dotActiveStyle,
    }),
  };
});

// ----------------------------------------------------------------------

export const StyledMenu = styled(Paper)(({ theme }) => ({
  top: 72,
  width: "100%",
  borderRadius: 0,
  position: "fixed",
  zIndex: theme.zIndex.modal,
  boxShadow: theme.customShadows.dialog,
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export const StyledSubheader = styled(ListSubheader)(({ theme }) => ({
  ...theme.typography.h6,
  padding: 0,
  color: theme.palette.text.primary,
  backgroundColor: "transparent",
}));
