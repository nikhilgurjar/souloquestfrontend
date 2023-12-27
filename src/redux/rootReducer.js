import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
// slices

import conversationReducer from './slices/conversation';
import partnerReducer from './slices/partner';
import userReducer from './slices/user'
// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  //   whitelist: [],
  //   blacklist: [],
};

const rootReducer = combineReducers({
  conversation: conversationReducer,
  partnerFinder: partnerReducer,
  user: userReducer
});

export { rootPersistConfig, rootReducer };
