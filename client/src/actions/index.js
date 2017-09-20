import axios from 'axios';

import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from './types';

export const authUser = (payload, history) => async dispatch => {
  try {
    const res = await axios.post('/api/v1/auth/login', payload);
    localStorage.setItem('token', res.data.token);

    history.push('/');

    dispatch({ type: AUTH_USER });
  } catch (err) {
    dispatch(authError(err.response.data));
  }
};

export const authError = (error) => async dispatch => {
  dispatch({ type: AUTH_ERROR, payload: error });
};

export const unauthUser = () => async dispatch => {
  localStorage.removeItem('token');

  dispatch({ type: UNAUTH_USER });
};

export const createUser = (payload, history) => async dispatch => {
  try {
    const res = await axios.post('/api/v1/auth/signup', payload);
    localStorage.setItem('token', res.data.token);

    history.push('/');

    dispatch({ type: AUTH_USER });
  } catch (err) {
    dispatch(authError(err.response.data));
  }
};
