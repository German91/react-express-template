import axios from 'axios';
import { FETCH_USER, CREATE_USER } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/v1/auth/profile');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const createUser = (payload) => async dispatch => {
  const res = await axios.post('/api/v1/auth/signup', payload);

  dispatch({ type: CREATE_USER, payload: res.data });
};
