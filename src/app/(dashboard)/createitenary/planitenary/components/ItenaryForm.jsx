"use client";
import {
  Box,
  Button,
  InputAdornment,
  InputBase,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { MobileDatePicker } from "@mui/x-date-pickers";
import React, { useState } from "react";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import NextLink from "next/link";
import AutoComplete from "./AutoComplete";
import CustomAutocomplete from "./CustomAutocomplete";
const ItenaryForm = () => {
  const [destination, setDestination] = React.useState([
    { name: "Moreshwer Ganesh Mandir Temple" },
    { name: "Joshi's Museum of Miniature Railways" },
  ]);
  // const [inputValue, setInputValue] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
console.log(selectedLocation);
  const handleLocationChange = (value) => {
    setSelectedLocation(value);
  };

  return (
    <Box
      sx={{
        width: "75vw",
        mx: "auto",
        boxShadow: "0px 4px 4px 0px #00000040",
        py: 10,
        px: 10,
        minWidth: "420px",
        bgcolor: "#fff",
        mb: 10,
      }}
    >
      <Typography variant="h4" component={"h4"} fontWeight={500} pb={6}>
        Plan Your Itenary
      </Typography>
      <Box>
        <InputLabel
          sx={{ fontWeight: "500", py: 2, color: "initial", fontWeight: "600" }}
        >
          Where to?
        </InputLabel>

        <CustomAutocomplete
          value={selectedLocation}
          onChange={handleLocationChange}
          // Add any additional props you want to pass
        />
        <InputLabel
          sx={{ fontWeight: "500", py: 2, color: "initial", fontWeight: "600" }}
        >
          Dates?
        </InputLabel>
        <Box
          sx={{
            border: "1px solid #A5A0A0",
            borderRadius: "8px",
            height: 56,
            display: "flex",
            alignItems: "center",
            pl: 2,
          }}
        >
          <MobileDatePicker
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
            disablePast
            view="day"
            slots={{
              textField: ({
                inputProps,
                InputProps,
                ownerState,
                inputRef,
                error,
                ...inputOther
              }) => (
                <Stack spacing={1} direction={"row"}>
                  <InputBase
                    fullWidth
                    {...InputProps}
                    ref={InputProps?.ref}
                    inputRef={inputRef}
                    inputProps={{
                      ...inputProps,
                      ...inputOther,
                      placeholder: "Departure day",
                    }}
                    startAdornment={
                      <InputAdornment position="start">
                        <HiOutlineCalendarDays
                          size={24}
                          style={{ color: "#939090", marginRight: 1 }}
                        />
                      </InputAdornment>
                    }
                  />
                  <InputBase
                    fullWidth
                    {...InputProps}
                    ref={InputProps?.ref}
                    inputRef={inputRef}
                    inputProps={{
                      ...inputProps,
                      ...inputOther,
                      placeholder: "Departure day",
                    }}
                    startAdornment={
                      <InputAdornment position="start">
                        <HiOutlineCalendarDays
                          size={24}
                          style={{ color: "#939090", marginRight: 1 }}
                        />
                      </InputAdornment>
                    }
                  />
                </Stack>
              ),
            }}
          />
        </Box>
        <Typography
          variant="body2"
          component={NextLink}
          href={"/"}
          sx={{
            textAlign: "right",
            textDecoration: "none",
            display: "block",
            py: 2,
            color: "primary.main",
            fontWeight: "500",
          }}
        >
          Need tripmates?
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{ mt: 5, px: 5, textTransform: "lowercase" }}
        >
          Let’s go
        </Button>
      </Box>
    </Box>
  );
};

export default ItenaryForm;
