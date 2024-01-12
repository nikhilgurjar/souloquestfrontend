'use client';
import {
  Box,
  IconButton,
  InputAdornment,
  InputBase,
  InputLabel,
  Autocomplete,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { IoSearch } from "react-icons/io5";
import locationIcon from "@images/images/locationHero.png";
import { MobileDatePicker } from "@mui/x-date-pickers";
import UnionImg from "@images/images/Union.svg";

const locations = [
  {
    label: "Phnom Penh",
  },
  {
    label: "Kampot",
  },
  {
    label: "Ujjain",
  },
  {
    label: "Raipur",
  },
  {
    label: "Bhopal",
  },
  {
    label: "Chandigarh",
  },
  {
    label: "Delhi",
  },
  {
    label: "Mumbai",
  },
  {
    label: "Kolkata",
  },
  {
    label: "Chennai",
  },
  {
    label: "Hyderabad",
  },
];
const CustomLandingInput = () => {
  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState("");
  return (
    <Box
      sx={{
        bgcolor: "#FDFEFF",
        px: 2,
        py: 1.5,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 2,
        borderRadius: "40px",
        "@media (min-width: 900px)": {
          width: "80%", // Make it full width on smaller screens
          alignSelf: "flex-start",
          maxWidth: "450px",
        },
        alignSelf: "center",
        width: "60%",
        minWidth: "300px",
      }}
    >
      <Box sx={{ ml: 2 }}>
        <InputLabel
          sx={{
            fontWeight: "500",
            color: "initial",
            fontWeight: "600",
            display: "flex",
            alignItems: "center ",
            gap: 1,
          }}
        >
          Where
          <Image src={locationIcon} width={10} height={13} alt="location" />
        </InputLabel>
        <Autocomplete
          sx={{ width: 1 }}
          popupIcon={null}
          value={value}
          options={locations}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          getOptionLabel={(option) => option.label}
          renderInput={(params) => (
            <InputBase
              {...params.InputProps}
              inputProps={params.inputProps}
              fullWidth
              placeholder="Center Point, Lo..."
              sx={{
                typography: "subtitle1",
                color: "inherit",
                fontSize: "0.8rem",
                width: "140px",
              }}
            />
          )}
          renderOption={(props, option) => <li {...props}>{option.label}</li>}
        />
      </Box>
      <Box>
        <InputLabel
          sx={{
            fontWeight: "500",
            color: "initial",
            fontWeight: "600",
            display: "flex",
            alignItems: "center ",
            gap: 1,
          }}
        >
          Date
          <Image src={UnionImg} width={15} height={15} alt="calender" />
        </InputLabel>
        <MobileDatePicker
          value={""}
          onChange={() => {}}
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
              <InputBase
                fullWidth
                {...InputProps}
                ref={InputProps?.ref}
                inputRef={inputRef}
                inputProps={{
                  ...inputProps,
                  ...inputOther,
                  // placeholder: "Departure day",
                }}
                sx={{ typography: "subtitle1", color: "inherit" }}
              />
            ),
          }}
        />
      </Box>
      <Box>
        <IconButton
          sx={{
            color: "#fff",
            bgcolor: "primary.main",
            opacity: "0.8",
            "&:hover": {
              opacity: "0.8", // Adjust the opacity value as needed
              color: "primary.main",
            },
          }}
        >
          <IoSearch />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CustomLandingInput;
