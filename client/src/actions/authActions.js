import axios from 'axios';
import {
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER,
  AUTH_PASSWORD
} from './types';

export const loginUser = (payload, history) => async dispatch => {
  try {
    const res = await axios.post('/api/v1/auth/login', payload);

    localStorage.setItem('token', res.data.token);
    history.push('/');

    dispatch({ type: AUTH_USER });
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: err.response.data.message });
  }
};

export const createUser = (payload, history) => async dispatch => {
  try {
    const res = await axios.post('/api/v1/auth/signup', payload);

    localStorage.setItem('token', res.data.token);
    history.push('/');

    dispatch({ type: AUTH_USER });
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: err.response.data.message });
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

    dispatch({ type: AUTH_PASSWORD, payload: res.data.message });
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: err.response.data.message });
  }
};

export const recoverPassword = (payload) => async dispatch => {
  try {
    const res = await axios.post('/api/v1/auth/reset-password', payload);

    dispatch({ type: AUTH_PASSWORD, payload: res.data.message });
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: err.response.data.message });
  }
};
