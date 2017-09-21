import {
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER,
  AUTH_PASSWORD,
} from '../actions/types';

const initialState = {
  error: '',
  message: '',
  authenticated: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      return Object.assign({}, state, { authenticated: true });
    case AUTH_ERROR:
      return Object.assign({}, state, { error: action.payload });
    case UNAUTH_USER:
      return Object.assign({}, state, { authenticated: false });
    case AUTH_PASSWORD:
      return Object.assign({}, state, { message: action.payload });
    default:
      return state;
  }
}
