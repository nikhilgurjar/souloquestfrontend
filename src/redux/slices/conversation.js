import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  conversationList: [],
  messageList: [],
  selectedRoomId : null
};

const slice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    fetchConversationList (state, action) {
      state.conversationList = action.payload.conversation;
    },
    addConversation(state, action) {
      state.conversationList = [...state.conversationList, action.payload.conversation];
    },
    setCurrentConversation(state, action) {
      console.log(action.payload)
      state.selectedRoomId = action.payload.current_conversation;
    }
  }
});

// Reducer
export default slice.reducer;


export const SetCurrentConversation = ({current_conversation}) => {
  return async (dispatch, getState) => {
    dispatch(slice.actions.setCurrentConversation({current_conversation}));
  };
};
