import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUserProfile } from '../actions/authActions';

import Home from '../components/Home';
import About from '../components/About';
import Header from '../components/Header';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';
import ForgotPassword from '../components/auth/ForgotPassword';
import RecoverPassword from '../components/auth/RecoverPassword';

class App extends Component {
  componentDidMount() {
    if (this.props.authenticated) {
      this.props.fetchUserProfile();
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />

          {/* Public Routes */}
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />

          {/* Auth Routes */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route exact path="/reset-password/:token" component={RecoverPassword} />
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    authenticated: auth.authenticated
  }
}

export default connect(mapStateToProps, { fetchUserProfile })(App);
