import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  isLoggedIn: false,
  user: null,
  user_id: null
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogIn(state, action) {
        state.isLoggedIn = !state.isLoggedIn;
      },
    setUser(state, action){
        state.user = action.payload.user;
        state.user_id = action.payload.user?._id
    },
    logOut(state, action){
        state.isLoggedIn = false;
        state.user = null;
        state.user_id = null;
    }
  }
})

export const logInUser = ({ user }) =>{
    return async (dispatch, getState) => {
        dispatch(slice.actions.setLogIn());
        dispatch(slice.actions.setUser({user}));
      };
}

export const {
    logOut,
    setUser
} = slice.actions;

export default slice.reducer;