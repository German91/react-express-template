import { FETCH_USER, CREATE_USER, LOGIN_USER, LOGOUT_USER } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    case CREATE_USER:
      return action.payload;
    case LOGIN_USER:
      return action.payload;
    case LOGOUT_USER:
      return action.payload;
    default:
      return state;
  }
};
