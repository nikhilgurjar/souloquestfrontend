"use client";
import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import Autocomplete from "@mui/material/Autocomplete";
import { debounce } from "@mui/material/utils";
import axios from "axios";
import { toast } from "react-toastify";
import AutoCompleteApi from "./AutoComplete";

const CustomAutocomplete = ({ value, onChange, ...other }) => {
  const [options, setOptions] = React.useState([]);
  console.log(value);
  const [inputValue, setInputValue] = React.useState("");

  const getPlaceOptions = React.useMemo(
    () =>
      debounce(async (request, callback) => {
        // autocompleteService.current.getPlacePredictions(request, callback);
        console.log(request, callback);
        try {
          const response = await AutoCompleteApi(request.input);
          console.log(response);
          // callback(response.data.results);

          callback(response);
        } catch (error) {
          console.log(error);
          toast.error(error?.message || error?.error);
        }
      }, 800),
    []
  );

  React.useEffect(() => {
    let active = true;

    if (inputValue === "") {
      setOptions(value ? [value] : []);
      return undefined;
    }

    getPlaceOptions({ input: inputValue }, (results) => {
      if (active) {
        let newOptions = [];
        console.log(value);
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
  }, [value, inputValue]);

  return (
    <Autocomplete
      sx={{ width: 1 }}
      componentName="CustomInput"
      options={options}
      getOptionLabel={(option) => option.formatted}
      value={value}
      defaultValue={""}
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
            autoComplete: "search",
            startAdornment: (
              <InputAdornment position="start">
                <CiLocationOn style={{ marginRight: 0.5 }} />
              </InputAdornment>
            ),
            sx: { pb: 1 },
          }}
        />
      )}
    />
  );
};

export default CustomAutocomplete;
