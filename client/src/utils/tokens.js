
import axios from 'axios';

export const authenticateUser = (token) => {
  window.localStorage.setItem('token', token);
  axios.defaults.headers.common['Authorization'] = token;
};

export const isAuthenticated = () => {
  let token = window.localStorage.getItem('token');

  return token;
};

export const destroyToken = () => {
  window.localStorage.removeItem('token');
};
