import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, FORGOT_PASSWORD, RECOVER_PASSWORD } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, error: '', authenticated: true };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case UNAUTH_USER:
      return { ...state, error: '', authenticated: false };
    case FORGOT_PASSWORD:
      return { ...state, error: '', message: action.payload };
    case RECOVER_PASSWORD:
      return { ...state, error: '', message: action.payload };
    default:
      return state;
  }
}
