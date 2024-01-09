import { useState } from "react";

const FilterByAvgSpendingTime = ({ onFilterChange }) => {
  const [minTime, setMinTime] = useState("");
  const [maxTime, setMaxTime] = useState("");

  const handleFilterChange = () => {
    // Validate input values and pass them to the parent component
    if (validateInput()) {
      onFilterChange({ minTime, maxTime });
    }
  };

  const validateInput = () => {
    // You can add more validation logic based on your requirements
    if (minTime === "" || maxTime === "") {
      alert("Please enter both minimum and maximum times.");
      return false;
    }

    return true;
  };

  return (
    <div>
      <label>
        Min Time (min):
        <input
          type="number"
          value={minTime}
          onChange={(e) => setMinTime(e.target.value)}
        />
      </label>
      <label>
        Max Time (min):
        <input
          type="number"
          value={maxTime}
          onChange={(e) => setMaxTime(e.target.value)}
        />
      </label>
      <button onClick={handleFilterChange}>Apply Filter</button>
    </div>
  );
};

export default FilterByAvgSpendingTime;
