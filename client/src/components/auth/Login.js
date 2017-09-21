import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const email = this.refs.email.value.trim();
    const password = this.refs.password.value.trim();

    this.props.authUser({ email, password }, this.props.history);
  }

  renderError() {
    if (this.props.error) {
      return (
        <div className="alert alert-danger">
          <strong>{this.props.error}</strong>
        </div>
      );
    }
  }

  render() {
    console.log(this.props.error);
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-sm-offset-3">
            <h1>Login</h1>
            <hr/>

            {this.renderError()}

            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" ref="email" placeholder="Email Address" className="form-control"/>
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" ref="password" placeholder="Password" className="form-control"/>
              </div>

              <button type="submit" className="btn btn-primary">Login</button>
            </form>

            <div className="text-center">
              <Link to="/forgot-password">Forgot password?</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    error: state.auth ? state.auth.error.message : null
  };
}

export default connect(mapStateToProps, actions)(Login);
