'use client';
import { CircularProgress, InputAdornment, InputBase } from '@mui/material';
import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import Autocomplete from '@mui/material/Autocomplete';
import { debounce } from '@mui/material/utils';
import axios from 'axios';
import { toast } from 'react-toastify';
import {GrMapLocation} from "react-icons/gr";
import { FaStar } from "react-icons/fa";

const DestinationAutocomplete = ({ value, onChange, optionsHandler, ...other }) => {
  const [options, setOptions] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false); // State for loading indicator

  const getPlaceOptions = React.useMemo(
    () =>
      debounce(async (request, callback) => {
        // autocompleteService.current.getPlacePredictions(request, callback);
        
        setIsLoading(true); // Start loading indicator
       try{
        const response = await axios.get(`/api/places?searchTerm=${request?.input}`);
        callback(response.data);
       }
       catch(error){
        toast.error(error?.message || error?.error)
       }
       finally{
        setIsLoading(false); // Stop loading indicator
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
        optionsHandler && optionsHandler(newOptions);
      }
    });

    return () => {
      active = false;
    };
  }, [value, inputValue, fetch]);

  return (
    <Autocomplete
      sx={{ width: 1 }}
      popupIcon={null}
      options={options}
      getOptionLabel={(option) => option.name}
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
        <InputBase
          {...params.InputProps}
          inputProps={params.inputProps}
          fullWidth
          placeholder="Search location?"
      
          startAdornment={
            <InputAdornment position="start">
              {isLoading ? <CircularProgress />: <GrMapLocation size={24} style={{ color: 'text.disabled', mr: 1 }} />}
            </InputAdornment>
          }
          sx={{ height: 44, typography: 'subtitle1', color: 'inherit' }}
        />
      )}

      renderOption={(props, option) => (
        <li {...props} className='flex justify-between items-center p-1 cursor-pointer'>
        <div>
          <strong className='mb-0 pb-0'>{option.name}</strong>
          <p className='mt-1 pt-0'>{option.address}</p>
        </div>
        {option.rating && (
          <div className='flex justify-between items-center'>
          <FaStar
            value={option.rating}
            precision={0.5}
            size={20}
            color='#FFAB00'
            readOnly
            style={{ display: 'inline-flex', alignItems: 'center', ml: 1, marginRight: 2 }}
          />
          {option.rating}
          </div>
        )}
      </li>
      )}
    />
  )
}

export default DestinationAutocomplete