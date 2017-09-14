import { combineReducers } from 'redux';
import userReducer from './userReducers';
import authReducer from './authReducers';

export default combineReducers({
  auth: authReducer,
  user: userReducer,
});
