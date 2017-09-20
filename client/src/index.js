import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import reducers from './reducers';
import { AUTH_USER } from './actions/types';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
const token = localStorage.getItem('token');

if (token) {
  store.dispatch({ type: AUTH_USER });
  axios.defaults.headers.common['Authorization'] = token;
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

registerServiceWorker();
