"use client";
import { useState } from "react";
// @mui
import {
  Stack,
  Drawer,
  Button,
  Collapse,
  Typography,
  StackProps,
  IconButton,
  Divider,
} from "@mui/material";
// hooks

// config
// types
// components
import { MdDelete } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";
import useResponsive from "@/hooks/useResponsive";
import FilterByCategories from "./components/FilterByCategories";
import FilterByAvgSpendTime from "./components/FilterByAvgSpendTime";
import FilterByRating from "./components/FilterByRating";
import Scrollbar from "@/components/scrollbar";
//

// ----------------------------------------------------------------------


const CATEGORY_OPTIONS = [
  "religious",
  "historical",
  "museum",
  "Fort",
  "adventure ",
  "park",
];

// ----------------------------------------------------------------------

const defaultValues = {
  filterCategories: "",
  filterRating: null,
  filterStock: false,
  filterAvgSpendTime: "",
  filterShipping: [],
  filterTag: [],
  filterPrice: {
    start: 0,
    end: 0,
  },
};

export default function ItenaryFilters({ mobileOpen, onMobileClose }) {
  const isMdUp = useResponsive("up", "md");
  const [filters, setFilters] = useState(defaultValues);

  const getSelected = (selectedItems, item) =>
    selectedItems.includes(item)
      ? selectedItems.filter((value) => value !== item)
      : [...selectedItems, item];

  const handleChangeCategories = (name) => {
    setFilters({
      ...filters,
      filterCategories: name,
    });
  };
  

  const handleAvgSpendtime = (event) => {
    setFilters({
      ...filters,
      filterAvgSpendTime: event.target.value,
    });
  };

  const handleChangeRating = (event) => {
    setFilters({
      ...filters,
      filterRating: event.target.value,
    });
  };

  const handleClearAll = () => {
    setFilters(defaultValues);
  };

  const renderContent = (
    <Stack
      spacing={3}
      alignItems="flex-start"
      sx={{
        flexShrink: 0,
        width: { xs: 1, md: 280 },
      }}
    >
      <Block title="Category">
        <FilterByCategories
          filterCategories={filters.filterCategories}
          onChangeCategories={handleChangeCategories}
          options={CATEGORY_OPTIONS}
          sx={{ mt: 2 }}
        />
      </Block>

      <Typography variant="h6">Avg Spend Time</Typography>
      <FilterByAvgSpendTime
        filterAvgSpendTime={filters.filterAvgSpendTime}
        onFilterChange={handleAvgSpendtime}
      />

      <Block title="Ratings">
        <FilterByRating
          filterRating={filters.filterRating}
          onChangeRating={handleChangeRating}
          sx={{ mt: 2 }}
        />
      </Block>

      {/* <EcommerceFilterStock filterStock={filters.filterStock} onChangeStock={handleChangeStock} /> */}

      <Button
        fullWidth
        size="large"
        variant="contained"
        startIcon={
          <IconButton>
            <MdDelete style={{ color: "white" }} />
          </IconButton>
        }
        onClick={handleClearAll}
      >
        Clear All
      </Button>
    </Stack>
  );

  return (
    <>
      {isMdUp ? (
        renderContent
      ) : (
        <Drawer
          anchor="left"
          open={mobileOpen}
          onClose={onMobileClose}
          ModalProps={{ keepMounted: true }}
          PaperProps={{
            sx: {
              width: 280,
            },
          }}
        >
          <Scrollbar sx={{ py: 3, px: 3 }}>{renderContent}</Scrollbar>
        </Drawer>
      )}
    </>
  );
}

// ----------------------------------------------------------------------

function Block({ title, children, ...other }) {
  const [checked, setChecked] = useState(true);

  const handleOpen = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Stack alignItems="flex-start" sx={{ width: 1 }} {...other}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        onClick={handleOpen}
        sx={{ width: 1, cursor: "pointer" }}
      >
        <Typography variant="h6">{title}</Typography>

        <IconButton
          icon={checked ? <IoIosAdd /> : <GrSubtractCircle />}
          sx={{ color: "text.secondary" }}
        />
      </Stack>

      <Collapse unmountOnExit in={checked} sx={{ px: 0.5 }}>
        {children}
      </Collapse>
    </Stack>
  );
}
