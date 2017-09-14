
import axios from 'axios';

class Auth {

  static authenticateUser(token) {
    window.localStorage.setItem('token', token);
    axios.defaults.headers.common['Authorization'] = token;
  }

  static isAuthenticated() {
    const token = window.localStorage.getItem('token');

    return token;
  }

  static destroyToken(callback) {
    window.localStorage.removeItem('token');
  }

  static getToken() {
    const token = window.localStorage.getItem('token');

    return token;
  }

}

export default Auth;
