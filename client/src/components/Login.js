import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    this.props.loginUser({ email, password }, this.props.history);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <form onSubmit={this.handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" ref="email" placeholder="Email Address" className="form-control" />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" ref="password" placeholder="Password" className="form-control" />
              </div>

              <button className="btn btn-primary" type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(Login);
