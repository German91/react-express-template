import axios from 'axios';
import { FETCH_USER, CREATE_USER, LOGIN_USER, CURRENT_USER, LOGOUT_USER } from './types';
import Auth from '../utils/Auth';

export const fetchUser = () => async dispatch => {
  const isLogged = Auth.isAuthenticated();

  dispatch({ type: FETCH_USER, payload: isLogged });
};

export const createUser = (payload, history) => async dispatch => {
  const res = await axios.post('/api/v1/auth/signup', payload);

  Auth.authenticateUser(res.data.token);
  history.push('/');
  dispatch({ type: CREATE_USER, payload: res.data });
};

export const loginUser = (payload, history) => async dispatch => {
  const res = await axios.post('/api/v1/auth/login', payload);

  Auth.authenticateUser(res.data.token);
  history.push('/');
  dispatch({ type: LOGIN_USER, payload: res.data });
};

export const currentUser = () => async dispatch => {
  const res = await axios.get('/api/v1/auth/profile');

  dispatch({ type: CURRENT_USER, payload: res.data });
};

export const logoutUser = () => async dispatch => {
  const res = await axios.get('/api/v1/auth/logout');

  Auth.destroyToken();
  dispatch({ type: LOGOUT_USER, payload: res.data });
};
