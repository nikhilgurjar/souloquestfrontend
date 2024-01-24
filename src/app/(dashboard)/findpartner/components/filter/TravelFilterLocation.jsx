'use client'
import { Autocomplete, InputAdornment, InputBase } from '@mui/material'
import Image from 'next/image';
import React from 'react'
import {GrMapLocation} from "react-icons/gr";
import { debounce } from '@mui/material/utils';
import axios from 'axios';
import { usePartnerFinder } from '../PartnerContext';
import { toast } from 'react-toastify';

const TravelFilterLocation = () => {
  const [options, setOptions] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');

  const {setLocation, location} = usePartnerFinder()

  const handleLocationChange = (value) => {
    console.info(value);
    if(!value) return;
    setLocation(value.name || value.formatted)
};

  const getPlaceOptions = React.useMemo(
    () =>
      debounce(async (request, callback) => {
        // autocompleteService.current.getPlacePredictions(request, callback);
       try{
        const response = await axios.get(`https://api.geoapify.com/v1/geocode/autocomplete?text=${request?.input}&lang=en&limit=10&filter=countrycode:in&categories=catering,public_transport,sport,accommodation.hostel,accommodation.hotel,accommodation.motel,accommodation.lodging,activity,commercial,catering,entertainment,leisure,natural,national_park,tourism,religion,camping,beach,adult&format=json&apiKey=42ae62a239d348d69856ccd884e4d0fc`);
        console.log(response);
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
      setOptions(location ? [location] : []);
      return undefined;
    }

    getPlaceOptions({ input: inputValue }, (results) => {
      if (active) {
        let newOptions = [];

        if (location) {
          newOptions = [location];
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
  }, [location, inputValue, fetch]);

console.log(location);
  return (
    <Autocomplete
    sx={{ width: 1 }}
    popupIcon={null}
    value={location}
    options={options}
    onChange={(event, value) => handleLocationChange(value)}
    inputValue={inputValue}
    onInputChange={(event, newInputValue) => {
      setInputValue(newInputValue);
    }}
    defaultValue={''}
    filterOptions={(x) => x}
    includeInputInList
      filterSelectedOptions
      noOptionsText="No locations"
      getOptionLabel={(option) => option}
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
        <li {...props} className='flex justify-between items-center p-1 cursor-pointer' key={option.place_id}>
        <div>
          <strong className='mb-0 pb-0'>{option.name || option.formatted}</strong>
          <p className='mt-1 pt-0'>{option.address_line2}</p>
        </div>
        </li>
      )}
    />
  )
}

export default TravelFilterLocation