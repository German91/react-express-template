import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import Auth from './utils/Auth';

import App from './components/App';
import reducers from './reducers';

// Development only axios helpers!
import axios from 'axios';
window.axios = axios;
axios.defaults.headers.common['Authorization'] = Auth.getToken();
axios.defaults.headers.post['Content-Type'] = 'application/json';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
