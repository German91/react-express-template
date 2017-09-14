import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Auth from '../utils/Auth';

import Header from './Header';
import Home from '../components/Home';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import Profile from '../components/Profile';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.currentUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/profile" component={Profile} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
