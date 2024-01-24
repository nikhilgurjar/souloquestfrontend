"use client";
import { getRooms } from "@/actions/partnerFinder";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { toast } from "react-toastify";

const initialState = {
  chatList: [],
  selectedConversation: null,
  keywordFilter: "",
  messages: [],
  messageWindowHidden: true,
};

// Actions
const SET_CHAT_LIST = "SET_CHAT_LIST";
const SELECT_CONVERSATION = "SELECT_CONVERSATION";
const SET_KEYWORD_FILTER = "SET_KEYWORD_FILTER";
const SET_MESSAGES = "SET_MESSAGES";
const HIDE_MESSAGES = "HIDE_MESSAGES";

// Reducer
const rootReducer = (state, action) => {
  switch (action.type) {
    case SET_CHAT_LIST:
      return { ...state, chatList: action.payload };
    case SELECT_CONVERSATION:
      return { ...state, selectedConversation: action.payload, messageWindowHidden: false };
    case SET_KEYWORD_FILTER:
      return { ...state, keywordFilter: action.payload };
    case SET_MESSAGES:
      return { ...state, messages: action.payload };
    case HIDE_MESSAGES:
      return { ...state, messageWindowHidden: !state.messageWindowHidden, selectedConversation: null};
    default:
      return state;
  }
};

// Context
const ChatContext = createContext();

// Context Provider
const ChatProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const response = await getRooms();
        setChatList(response);
      } catch (error) {
        toast.error(error);
      }
    };

    fetchConversations(); // Call the function directly
  }, []);

  const { messageWindowHidden, chatList, messages, keywordFilter, selectedConversation } = state;

  const setChatList = (chatList) => {
    dispatch({ type: SET_CHAT_LIST, payload: chatList });
  };

  const selectConversation = (conversation) => {
    dispatch({ type: SELECT_CONVERSATION, payload: conversation });
  };

  const setKeywordFilter = (keyword) => {
    dispatch({ type: SET_KEYWORD_FILTER, payload: keyword });
  };

  const setMessages = (messages) => {
    dispatch({ type: SET_MESSAGES, payload: messages });
  };

  const hideMessages = () => {
    dispatch({ type: HIDE_MESSAGES});
  };

  return (
    <ChatContext.Provider
      value={{
        chatList,
        messages,
        keywordFilter,
        selectedConversation,
        messageWindowHidden,
        setChatList,
        selectConversation,
        setKeywordFilter,
        setMessages,
        hideMessages
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

// Custom Hook for using the ChatContext
const useChat = () => {
  return useContext(ChatContext);
};

export { ChatProvider, useChat };
