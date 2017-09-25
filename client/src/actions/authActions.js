import axios from 'axios';
import {
  AUTH_SUCCESS,
  AUTH_FAILURE,
  UNAUTH_USER,
  AUTH_PASSWORD_SUCCESS,
  AUTH_PASSWORD_FAILURE,
  CREATE_USER_FAILURE,
  FETCH_PROFILE_SUCCESS
} from './types';

export const loginUser = (payload, history) => async dispatch => {
  try {
    const res = await axios.post('/api/v1/auth/login', payload);

    localStorage.setItem('token', res.data.token);
    history.push('/');

    dispatch({ type: AUTH_SUCCESS, payload: res.data.user });
  } catch (err) {
    dispatch({ type: AUTH_FAILURE, payload: err.response.data.message });
  }
};

export const createUser = (payload, history) => async dispatch => {
  try {
    const res = await axios.post('/api/v1/auth/signup', payload);

    localStorage.setItem('token', res.data.token);
    history.push('/');

    dispatch({ type: AUTH_SUCCESS, payload: res.data.user });
  } catch (err) {
    dispatch({ type: CREATE_USER_FAILURE, payload: err.response.data.message });
  }
};

export const logoutUser = () => async dispatch => {
  await axios.get('/api/v1/auth/logout');

  localStorage.removeItem('token');

  dispatch({ type: UNAUTH_USER });
};

export const forgotPassword = (payload) => async dispatch => {
  try {
    const res = await axios.post('/api/v1/auth/forgot-password', payload);

    dispatch({ type: AUTH_PASSWORD_SUCCESS, payload: res.data.message });
  } catch (err) {
    dispatch({ type: AUTH_PASSWORD_FAILURE, payload: err.response.data.message });
  }
};

export const recoverPassword = (payload) => async dispatch => {
  try {
    const res = await axios.post('/api/v1/auth/reset-password', payload);

    dispatch({ type: AUTH_PASSWORD_SUCCESS, payload: res.data.message });
  } catch (err) {
    dispatch({ type: AUTH_PASSWORD_FAILURE, payload: err.response.data.message });
  }
};

export const fetchUserProfile = () => async dispatch => {
  const res = await axios.get('/api/v1/auth/profile');

  dispatch({ type: FETCH_PROFILE_SUCCESS, payload: res.data });
};
