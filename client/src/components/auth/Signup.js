import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../actions/authActions';

import Alert from '../Alert';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const username = this.refs.username.value.trim();
    const password = this.refs.password.value.trim();
    const email = this.refs.email.value.trim();

    this.props.createUser({ username, password, email }, this.props.history);

    e.target.reset();
  }

  renderError() {
    if (this.props.error) {
      return <Alert type="danger" message={this.props.error} />;
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-sm-offset-3">
            <h1>Sign Up</h1>
            <hr/>

            {this.renderError()}

            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" ref="username" placeholder="Username" className="form-control"/>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" ref="email" placeholder="Email Address" className="form-control"/>
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" ref="password" placeholder="password" className="form-control"/>
              </div>

              <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

function mapStateToProps({ auth }) {
  return {
    error: auth.error
  };
}

export default connect(mapStateToProps, { createUser })(Signup);
