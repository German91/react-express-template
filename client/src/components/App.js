import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Home from '../components/Home';
import About from '../components/About';
import Header from '../components/Header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
