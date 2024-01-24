'use client'
import React from 'react'
import { MobileDatePicker } from '@mui/x-date-pickers';
import { InputAdornment, InputBase } from '@mui/material';
import {HiOutlineCalendarDays} from "react-icons/hi2";
import dayjs from 'dayjs';
import { usePartnerFinder } from '../PartnerContext';

const TravelFilterTime = () => {

  const {departureDate, setDepartureDate} = usePartnerFinder();

  const handleChangeDepartureDay = (newValue) => {
    console.info(newValue)
      setDepartureDate(newValue)
  };
  
  return (
    <MobileDatePicker
    value={departureDate!=null ? dayjs(departureDate): null}
    onChange={handleChangeDepartureDay}
    disablePast
    view='day'
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
            ...(inputOther),
            placeholder: 'Departure day',
          }}
          startAdornment={
            <InputAdornment position="start">
              <HiOutlineCalendarDays size={24} style={{ color: 'text.disabled', marginRight: 1 }} />
            </InputAdornment>
          }
          sx={{ height: 44, typography: 'subtitle1', color: 'inherit'}}
        />
      ),
    }}
  />
  )
}

export default TravelFilterTime