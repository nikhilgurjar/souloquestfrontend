import { Box, Slider } from "@mui/material";

const FilterByAvgSpendingTime = ({ filterAvgSpendTime, onFilterChange }) => {
  function valueText(value) {
    return value;
  }
  return (
    <>
      <Slider
        aria-label="AvgSpendTime"
        defaultValue={30}
        onChange={onFilterChange}
        getAriaValueText={valueText}
        value={filterAvgSpendTime}
        valueLabelDisplay="auto"
        step={30}
        marks
        min={30}
        max={180}
        sx={{position:"relative",left:"6%",width:"80%"}}
      />
    </>
  );
};

export default FilterByAvgSpendingTime;
