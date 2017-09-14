import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducers';

export default combineReducers({
  auth: authReducer,
  form: reduxForm
});
