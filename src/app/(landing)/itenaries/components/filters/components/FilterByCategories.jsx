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
  const handleCategoryChange = (selectedCategory) => {
    // Toggle the selected category
    const updatedCategories = filterCategories.includes(selectedCategory)
      ? filterCategories.filter((category) => category !== selectedCategory)
      : [...filterCategories, selectedCategory];

    // Call the onChangeCategories with the updated categories array
    onChangeCategories(updatedCategories);
  };
  return (
    <Stack spacing={1} alignItems="flex-start" {...other}>
      {options.map((option) => (
        <Stack
          key={option}
          direction="row"
          alignItems="center"
          onClick={() => handleCategoryChange(option)}
          sx={{
            typography: "body2",
            cursor: "pointer",
            ...(filterCategories.includes(option) && {
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
