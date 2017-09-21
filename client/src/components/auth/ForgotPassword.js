import React, { Component } from 'react';
import { connect } from 'react-redux';
import { forgotPassword } from '../../actions/authActions';

import Alert from '../Alert';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const email = this.refs.email.value.trim();

    this.props.forgotPassword({ email });

    e.target.reset();
  }

  renderAlert() {
    if (this.props.error) {
      return <Alert type="danger" message={this.props.error} />;
    } else if (this.props.message) {
      return <Alert type="success" message={this.props.message} />;
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-sm-offset-3">
            <h1>Recover Password</h1>
            <hr/>

            {this.renderAlert()}

            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="text" id="email" ref="email" placeholder="Email Address" className="form-control"/>
              </div>

              <button type="submit" className="btn btn-primary">Recover</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

function mapStateToProps({ auth }) {
  return {
    error: auth.authPasswordError,
    message: auth.message,
  };
}

export default connect(mapStateToProps, { forgotPassword })(ForgotPassword);
