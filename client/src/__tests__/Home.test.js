import React from 'react';
import ReactDOM from 'react-dom';

import Home from '../components/Home';

describe('Home rendering', () => {
  it('It should render home component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home />, div);
  });
});
