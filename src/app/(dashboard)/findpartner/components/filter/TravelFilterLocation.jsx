'use client'
import { Autocomplete, InputAdornment, InputBase } from '@mui/material'
import Image from 'next/image';
import React from 'react'
import {GrMapLocation} from "react-icons/gr";


const locations = [
  {
   label: 'Phnom Penh',
  },
  {
   label: 'Kampot',
  },
  {
   label: 'Ujjain'
  },
  {
   label: 'Raipur'
  },
  {
   label: 'Bhopal'
  },
  {
   label: 'Chandigarh'
  },
  {
   label: 'Delhi'
  },
  {
   label: 'Mumbai'
  },
  {
   label: 'Kolkata'
  },
  {
   label: 'Chennai'
  },
  {
   label: 'Hyderabad'
  },
]

const TravelFilterLocation = ({location, onLocationChange}) => {

  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState('');

  return (
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
          placeholder="Where we go?"
      
          startAdornment={
            <InputAdornment position="start">
              <GrMapLocation size={24} style={{ color: 'text.disabled', mr: 1 }} />
            </InputAdornment>
          }
          sx={{ height: 44, typography: 'subtitle1', color: 'inherit' }}
        />
      )}
      renderOption={(props, option) => (
        <li {...props}>
          {option.label}
        </li>
      )}
    />
  )
}

export default TravelFilterLocation