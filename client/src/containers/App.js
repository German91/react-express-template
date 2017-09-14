import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Home from '../components/Home';
import Login from '../components/Login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
