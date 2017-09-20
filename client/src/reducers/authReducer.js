import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, error: '', authenticated: true };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case UNAUTH_USER:
      return { ...state, error: '', authenticated: false };
    default:
      return state;
  }
}
