import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  days: 3,
  title: 'Day Trip to Pune',
  itenary: [],
  startDate: null,
  endDate: null,
  location: {
    "country": "India",
    "country_code": "in",
    "state": "Maharashtra",
    "county": "Pune",
    "city": "Pune",
    "lon": 73.8544541,
    "lat": 18.521428,
    "state_code": "MH",
    "formatted": "Pune, India",
    "address_line1": "Pune",
    "address_line2": "India",
    "place_id": "51b8db3f60af76524059fc372f4e7c853240f00101f9010af49d0000000000c00208",
    "bbox": {
        "lon1": 73.7498473,
        "lat1": 18.429497,
        "lon2": 74.020214,
        "lat2": 18.6208699
    }
}
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
}

const slice = createSlice({
  name: "itenary",
  initialState,
  reducers: {
    setDays(state, action) {
      const newDays = action.payload.days;
      if(newDays < state.days){
        const newItenary = removeNullsFromEnd(state.itenary, state.days = newDays);
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
    addDestination(state, action){
        if(!state.itenary[action.payload.day]){
            state.itenary[action.payload.day] = []
        }
        state.itenary[action.payload.day].push(action.payload.destination);
    },
    removeDestination(state, action){
        state.itenary[action.payload.day] = state.itenary[action.payload.day].filter(item => item.id !== action.payload.id)
    },
    setEndDate(state, action){
      state.endDate = action.payload.endDate;
    },
    setStartDate(state, action){
      state.startDate = action.payload.startDate;
    },
    setLocation(state, action){
      state.location = action.payload.location;
      state.title = action.payload.city
    },
    deleteItenary(state, action){
      state.itenary = [];
      state.days = null;
    }
  }
});

export const {
  setDays,
  setTitle,
  setItenary,
  addDestination,
  removeDestination,
  setStartDate,
  setEndDate,
  setLocation,
  deleteItenary
} = slice.actions;

export default slice.reducer