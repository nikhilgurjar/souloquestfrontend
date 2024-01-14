'use client';
import { CircularProgress, InputAdornment, TextField } from '@mui/material';
import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import Autocomplete from '@mui/material/Autocomplete';
import { debounce } from '@mui/material/utils';
import axios from 'axios';
import { toast } from 'react-toastify';

const DestinationAutocomplete = ({ value, onChange, ...other }) => {
  const [options, setOptions] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false); // State for loading indicator

  const getPlaceOptions = React.useMemo(
    () =>
      debounce(async (request, callback) => {
        // autocompleteService.current.getPlacePredictions(request, callback);
        
        setIsLoading(true); // Start loading indicator
        console.log(request, callback);
       try{
        const response = await axios.get(`/api/places?searchTerm=${request?.input}`);
        console.log(response)
        callback(response.data);
       }
       catch(error){
        console.log(error)
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
      }
    });

    return () => {
      active = false;
    };
  }, [value, inputValue, fetch]);

  return (
    <Autocomplete
      sx={{ width: 1 }}
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
                {isLoading && <CircularProgress size={20} color="inherit" />}
              </InputAdornment>
            ),
            sx: { pb: 1 },
          }}
        />
      )}
    />
  )
}

export default DestinationAutocomplete