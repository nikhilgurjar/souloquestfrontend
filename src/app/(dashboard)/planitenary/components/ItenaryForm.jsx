"use client";
import { Autocomplete } from "@mui/material";
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
  TextField,
  Typography,
} from "@mui/material";
import { MobileDatePicker } from "@mui/x-date-pickers";
import React, { useState } from "react";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import NextLink from "next/link";
import CustomAutocomplete from "@/components/custom-input/CustomAutocomplete";
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from "@/redux/store";
import { setLocation } from "@/redux/slices/partner";
import { deleteItenary, setEndDate, setStartDate } from "@/redux/slices/itenary";
import uuidv4 from "@/utils/uuidv4";
import { toast } from "react-toastify";
import dayjs from "dayjs";

const ItenaryForm = () => {
  const dispatch = useDispatch();
  const router = useRouter()
  const startDate = useSelector(state=>state.itenary.startDate);
  const endDate = useSelector(state=>state.itenary.endDate);
  const location = useSelector(state=>state.itenary.location) || {formatted: 'Pune, Maharashtra, India'};

  const handleChangeLocation = async (keyword) =>{
    try{
      toast.info('We support Pune location only!!')
    }
    catch(error){
    }
}

const handleCreateItenry = async () =>{
  try{
    if(!startDate || !endDate || !location){
      toast.warn('Please fill details');
    }
    dispatch(deleteItenary());
    const itenaryId = uuidv4().toString();
    router.push('/createitenary/' + itenaryId);
  }
  catch(error){
  }
}

const handleStartDateChange = (date) => {
  dispatch(setStartDate({startDate: date}));
};

const handleEndDateChange = (date) => {
  dispatch(setEndDate({endDate: date}));
};


  return (
    <Box
      sx={{
        width: "80%",
        mx: "auto",
        mt: "100px",
        borderRadius: "none",
        boxShadow: "0px 4px 4px 0px #00000040",
        py: 10,
        px: 10,
        minWidth: "400px",
        bgcolor:"#fff"
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
          disabled
          placeholder="Enter Destination" onChange={handleChangeLocation} value={location}
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
            value={startDate!=null ? dayjs(startDate): null}
            onChange={(value) => handleStartDateChange(value)}
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
                 
                </Stack>
              ),
            }}
          />
          <MobileDatePicker
            value={endDate!=null ? dayjs(endDate): null}
            onChange={(value) => handleEndDateChange(value)}
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
          onClick={handleCreateItenry}
        >
          Let’s go
        </Button>
      </Box>
    </Box>
  );
};

export default ItenaryForm;
