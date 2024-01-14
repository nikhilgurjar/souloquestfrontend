'use client';
import { InputAdornment, TextField } from '@mui/material';
import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import Autocomplete from '@mui/material/Autocomplete';
import { debounce } from '@mui/material/utils';
import axios from 'axios';
import { toast } from 'react-toastify';

const CustomAutocomplete = ({ value, onChange,disabled=false, ...other }) => {
  const [options, setOptions] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');

  const getPlaceOptions = React.useMemo(
    () =>
      debounce(async (request, callback) => {
        // autocompleteService.current.getPlacePredictions(request, callback);
       try{
        const response = await axios.get(`https://api.geoapify.com/v1/geocode/autocomplete?text=${request?.input}&lang=en&limit=10&filter=countrycode:in&categories=catering,public_transport,sport,accommodation.hostel,accommodation.hotel,accommodation.motel,accommodation.lodging,activity,commercial,catering,entertainment,leisure,natural,national_park,tourism,religion,camping,beach,adult&format=json&apiKey=42ae62a239d348d69856ccd884e4d0fc`);
        callback(response.data.results);
       }
       catch(error){
        toast.error(error?.message || error?.error)
       }
      }, 800),
    [],
  );

  React.useEffect(() => {
    let active = true;

    if (inputValue === '') {
      setOptions(value ? [value] : []);
      return undefined;
    }

    getPlaceOptions({ input: inputValue }, (results) => {
      if (active) {
        let newOptions = [];

        if (value) {
          newOptions = [value];
        }

        if (results) {
          newOptions = [...newOptions, ...results];
        }

        setOptions(newOptions);
      }
    });

    return () => {
      active = false;
    };
  }, [value, inputValue, fetch]);

  return (
    <Autocomplete
    disabled={disabled}
      sx={{ width: 1 }}
      options={options}
      getOptionLabel={(option) => option.formatted}
      value={value}
      defaultValue={''}
      filterOptions={(x) => x}
      onChange={(event, value) => onChange(value)}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      includeInputInList
      filterSelectedOptions
      noOptionsText="No locations"
      renderInput={(params) => (
        <TextField
          {...params}
          {...other}
          hiddenLabel
          variant="filled"
          placeholder="Search..."
          InputProps={{
            ...params.InputProps,
            autoComplete: 'search',
            startAdornment: (
              <InputAdornment position="start">
                <CiLocationOn style={{marginRight: .5}}/>
              </InputAdornment>
            ),
            sx: { pb: 1 },
          }}
        />
      )}
    />
  )
}

export default CustomAutocomplete