import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';
import { isAuthenticated } from './utils/tokens';

import App from './components/App';
import reducers from './reducers';

axios.defaults.headers.common['Authorization'] = isAuthenticated();
axios.defaults.headers.post['Content-Type'] = 'application/json';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

if (isAuthenticated()) {
  console.log('Logged');
} else {
  console.log('Logged out');
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

registerServiceWorker();
