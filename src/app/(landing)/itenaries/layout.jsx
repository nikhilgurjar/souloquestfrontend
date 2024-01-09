"use client";
import {
  Box,
  Stack,
  Button,
  Select,
  Divider,
  MenuItem,
  Container,
  Typography,
  FormControl,
} from "@mui/material";
import React, { useState } from "react";

import { Pagination } from "@mui/material";
import Scrollbar from "@/components/scrollbar/Scrollbar";
import ItenaryFilters from "./components/filters/ItenaryFilters";


const SORT_OPTIONS = [
  { value: "latest", label: "Latest" },
  { value: "oldest", label: "Oldest" },
  { value: "popular", label: "Popular" },
];
const ItenariesLayout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sort, setSort] = useState("latest");
  const handleChangeSort = (event) => {
    setSort(event.target.value);
  };
  const handleMobileOpen = () => {
    setMobileOpen(true);
  };

  const handleMobileClose = () => {
    setMobileOpen(false);
  };

  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          py: 5,
        }}
      >
        <Typography variant="h3" color={"primary.main"} fontWeight={500}>Itenaries</Typography>
        <Divider />
        <Button
          color="inherit"
          variant="contained"
          // startIcon={<Iconify icon="carbon:filter" width={18} />}
          onClick={handleMobileOpen}
          sx={{
            display: { md: "none" },
          }}
        >
          Filters
        </Button>
      </Stack>
      <Stack
        direction={{
          xs: "column-reverse",
          md: "row",
        }}
        sx={{ mb: { xs: 8, md: 10 } }}
      >
        <Stack spacing={5} divider={<Divider sx={{ borderStyle: "dashed" }} />}>
          <ItenaryFilters
            mobileOpen={mobileOpen}
            onMobileClose={handleMobileClose}
          />
        </Stack>
        <Box
          sx={{
            flexGrow: 1,
            pl: { md: 8 },
            width: { md: `calc(100% - ${280}px)` },
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mb: 5 }}
          >
            <Typography variant="body1" color="initial">
              SearchBar
            </Typography>
            <FormControl
              size="small"
              hiddenLabel
              variant="filled"
              sx={{ width: 120 }}
            >
              <Select
                value={sort}
                onChange={handleChangeSort}
                MenuProps={{
                  PaperProps: {
                    sx: { px: 1 },
                  },
                }}
              >
                {SORT_OPTIONS.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
          <Box
            sx={{
              height: "90vh",
            }}
          >
            <Scrollbar>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                {children}
              </Box>
            </Scrollbar>
          </Box>
        </Box>
      </Stack>

      <Pagination
        count={10}
        color="primary"
        size="large"
        sx={{
          my: 10,
          "& .MuiPagination-ul": {
            justifyContent: "center",
          },
        }}
      />
    </Container>
  );
};

export default ItenariesLayout;
