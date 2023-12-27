import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  departureDate: null,
  location: null,
  requests: [],
  selectedRequest: null
};

const slice = createSlice({
  name: "partnerFinder",
  initialState,
  reducers: {
    setDepartureDate(state, action) {
      state.departureDate = action.payload.departureDate;
    },
    setLocation(state, action) {
      state.location = action.payload.location;
    },
    setRequests(state, action) {
      state.requests = action.payload.requests;
    },
    setSelectedRequest(state, action) {
      state.selectedRequest = action.payload.selectedRequest;
    }
  }
});

export const setFetchedPartnerRequest = ({ requests }) =>{
    return async (dispatch, getState) => {
        dispatch(slice.actions.setRequests({ requests }));
      };
}

export const {
  setDepartureDate,
  setLocation,
  setRequests,
  setSelectedRequest
} = slice.actions;
// Reducer
export default slice.reducer;