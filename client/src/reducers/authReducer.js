import {
  AUTH_SUCCESS,
  AUTH_FAILURE,
  UNAUTH_USER,
  AUTH_PASSWORD_SUCCESS,
  AUTH_PASSWORD_FAILURE,
  CREATE_USER_FAILURE,
  FETCH_PROFILE_SUCCESS,
} from '../actions/types';

const initialState = {
  authError: '',
  createUserError: '',
  authPasswordError: '',
  message: '',
  authenticated: false,
  profile: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return Object.assign({}, state, { authenticated: true, profile: action.payload });
    case AUTH_FAILURE:
      return Object.assign({}, state, { authError: action.payload });
    case CREATE_USER_FAILURE:
      return Object.assign({}, state, { createUserError: action.payload });
    case UNAUTH_USER:
      return Object.assign({}, state, { authenticated: false, profile: '' });
    case AUTH_PASSWORD_SUCCESS:
      return Object.assign({}, state, { authPasswordError: '', message: action.payload });
    case AUTH_PASSWORD_FAILURE:
      return Object.assign({}, state, { authPasswordError: action.payload });
    case FETCH_PROFILE_SUCCESS:
      return Object.assign({}, state, { profile: action.payload });
    default:
      return state;
  }
}
