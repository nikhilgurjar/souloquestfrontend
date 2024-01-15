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

const DestinationAutocomplete = ({ optionsHandler, ...other }) => {
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
    getPlaceOptions({ input: inputValue }, (results) => {
        console.table(results);
      if(results && results.length>0){
        setOptions(results);
      optionsHandler && optionsHandler(results);
      }
    });
  }, [inputValue]);

  return (
        <InputBase
        value={inputValue}
        onChange={(event) => {
            console.log(event?.target?.value)
            setInputValue(event?.target?.value);
          }}    
    
          fullWidth
          placeholder="Search location?"
          startAdornment={
            <InputAdornment position="start">
              {isLoading ? <CircularProgress />: <GrMapLocation size={24} style={{ color: 'text.disabled', mr: 1 }} />}
            </InputAdornment>
          }
          sx={{ height: 44, typography: 'subtitle1', color: 'inherit' }}
        />

      )
}

export default DestinationAutocomplete