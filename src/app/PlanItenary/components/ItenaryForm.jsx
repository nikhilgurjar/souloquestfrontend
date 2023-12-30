"use client";
import { DatePicker } from "@mui/lab";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Input,
  InputAdornment,
  InputBase,
  InputLabel,
  Stack,
  Typography,
} from "@mui/material";
import { MobileDatePicker } from "@mui/x-date-pickers";
import React from "react";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import NextLink from "next/link";
const ItenaryForm = () => {
  const [destination, setDestination] = React.useState("");

  return (
    <Box
      sx={{
        width: "70vw",
        mx: "auto",
        mt: "100px",
        borderRadius: "none",
        boxShadow: "0px 4px 4px 0px #00000040",
        py:10,
        px:10,
        minWidth:"400px"
      }}
    >
      <Typography variant="h4" component={"h4"} fontWeight={500}  pb={6}>
        Plan Your Itenary
      </Typography>
      <Box>
        <InputLabel
          sx={{ fontWeight: "500", py: 2, color: "initial", fontWeight: "600" }}
        >
          Where to?
        </InputLabel>
        <InputBase
          value={destination}
          onChange={(event) => setDestination(event.target.value)}
          placeholder="Your dream destination e.g. Paris, Indonesia,Japan "
          sx={{
            // position: "absolute",
            bottom: 0,
            pl: 2,
            width: "100%",
            height: 56,
            flexShrink: 0,
            border: "1px solid #A5A0A0",
            borderRadius: "8px",
          }}
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
        <Button variant="contained" size="large" sx={{mt:5,px:5,textTransform:"lowercase"}}>
          Let’s go
        </Button>
      </Box>
    </Box>
  );
};

export default ItenaryForm;
