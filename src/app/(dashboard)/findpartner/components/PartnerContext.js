import { fetchAllPartnerRequests } from '@/actions/partnerFinder';
import { createContext, useReducer, useEffect, useContext } from 'react';


const SET_DEPARTURE_DATE = 'SET_DEPARTURE_DATE'
const SET_LOCATION = 'SET_LOCATION'
const SET_REQUESTS = 'SET_REQUESTS'
const SET_SELECTED_REQUEST = 'SET_SELECTED_REQUEST'

// Reducer function to update state
const reducer = (state, action) => {
  switch (action.type) {
    case SET_DEPARTURE_DATE:
      return { ...state, departureDate: action.payload };
    case SET_LOCATION:
      return { ...state, location: action.payload };
    case SET_REQUESTS:
      return { ...state, requests: action.payload };
    case SET_SELECTED_REQUEST:
      return { ...state, selectedRequest: action.payload };
    default:
      return state;
  }
};

// Initial State
const initialState = {
    departureDate: null,
    location: null,
    requests: [],
    selectedRequest: null,
  };

// Create the context
export const PartnerFinderContext = createContext();

// Provider component
export const PartnerFinderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch partner requests asynchronously
  useEffect(() => {
    const fetchRequests = async () => {
      const fetchedRequests = await fetchAllPartnerRequests(); // Replace with your actual fetching logic
      console.log(fetchedRequests);
      dispatch({ type: SET_REQUESTS, payload: fetchedRequests });
    };

    fetchRequests();
  }, []);

  const setDepartureDate= (departureDate) =>{
    dispatch({ type: SET_DEPARTURE_DATE, payload: departureDate });
  }

  const setRequests= (requests) =>{
    dispatch({ type: SET_REQUESTS, payload: requests });
  }
  const setLocation = (location) =>{
    dispatch({ type: SET_LOCATION, payload: location });
  }
  const setSelectedRequest= (selectedRequest) =>{
    dispatch({ type: SET_SELECTED_REQUEST, payload: selectedRequest });
  }

  // Provide state and dispatch function
  const { departureDate, location, requests, selectedRequest } = state;

  return (
    <PartnerFinderContext.Provider value={{
      setSelectedRequest,
      setDepartureDate,
      setLocation,
      setRequests,
      departureDate,
      location,
      requests,
      selectedRequest
    }}>
      {children}
    </PartnerFinderContext.Provider>
  );
};


export const usePartnerFinder = () => {
    return useContext(PartnerFinderContext);
};