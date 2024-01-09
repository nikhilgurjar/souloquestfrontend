// @mui
import { IconButton, Stack, StackProps } from "@mui/material";
import { FaChevronRight } from "react-icons/fa6";
// components

// ----------------------------------------------------------------------

export default function FilterByCategory({
  options,
  filterCategories,
  onChangeCategories,
  ...other
}) {
  return (
    <Stack spacing={1} alignItems="flex-start" {...other}>
      {options.map((option) => (
        <Stack
          key={option}
          direction="row"
          alignItems="center"
          onClick={() => onChangeCategories(option)}
          sx={{
            typography: "body2",
            cursor: "pointer",
            ...(filterCategories === option && {
              fontWeight: "fontWeightBold",
            }),
          }}
        >
          {/* <Iconify icon="carbon:chevron-right" width={12} sx={{ mr: 1 }} /> */}
          <IconButton sx={{ mr: 1 }}>
            <FaChevronRight style={{ fontSize: "14px" }} />
          </IconButton>
          {option}
        </Stack>
      ))}
    </Stack>
  );
}
