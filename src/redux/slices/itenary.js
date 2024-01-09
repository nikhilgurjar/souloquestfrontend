import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  days: 3,
  title: null,
  itenary: [],
  startDate: null,
  endDate: null,
};

const removeNullsFromEnd = (arr, n) => {
  let nullCount = 0;
  while (nullCount < n && arr.length > 0) {
    const lastElement = arr.pop();
    if (lastElement === null) {
      nullCount++;
    } else {
      arr.push(lastElement); // Put back non-null elements
    }
  }

  return arr;
};

const slice = createSlice({
  name: "itenary",
  initialState,
  reducers: {
    setDays(state, action) {
      const newDays = action.payload.days;
      if (newDays < state.days) {
        const newItenary = removeNullsFromEnd(
          state.itenary,
          (state.days = newDays)
        );
        state.itenary = newItenary;
      }
      state.days = newDays;
    },
    setTitle(state, action) {
      state.title = action.payload.title;
    },
    setItenary(state, action) {
      state.itenary = action.payload.itenary;
    },
    addDestination(state, action) {
      if (!state.itenary[action.payload.day]) {
        state.itenary[action.payload.day] = [];
      }
      state.itenary[action.payload.day].push(action.payload.destination);
    },
    removeDestination(state, action) {
      state.itenary[action.payload.day] = state.itenary[
        action.payload.day
      ].filter((item) => item.place_id !== action.payload.id);
    },
  },
});

export const {
  setDays,
  setTitle,
  setItenary,
  addDestination,
  removeDestination,
} = slice.actions;

export default slice.reducer;
