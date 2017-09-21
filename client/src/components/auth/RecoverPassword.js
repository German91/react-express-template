import React, { Component } from 'react';
import { connect } from 'react-redux';
import { recoverPassword } from '../../actions/authActions';

import Alert from '../Alert';

class RecoverPassword extends Component {
  constructor(props) {
    super(props);

    this.state = { error: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const password = this.refs.password.value.trim();
    const repassword = this.refs.repassword.value.trim();
    const token = this.props.match.params.token;

    if (password !== repassword) {
      this.setState({ error: 'Password does not match' });
    } else {
      this.props.recoverPassword({ password, token });

      this.setState({ error: '' });
    }

    e.target.reset();
  }

  renderError() {
    if (this.props.error) {
      const error = this.props.error.name ? 'The token is expired' : this.props.error;

      return <Alert type="danger" message={error} />;
    } else if (this.props.message) {
      return <Alert type="success" message={this.props.message} />;
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-sm-offset-3">
            <h1>Reset Password</h1>
            <hr/>

            {this.renderError()}

            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="password">New Password</label>
                <input type="password" id="password" ref="password" placeholder="New Password" className="form-control"/>
              </div>

              <div className="form-group">
                <label htmlFor="repassword">Confirm Password</label>
                <input type="password" id="repassword" ref="repassword" placeholder="Confirm Password" className="form-control"/>

                {this.state.error ?
                  <span className="help-block">
                    <strong className="text-danger">{this.state.error}</strong>
                  </span>
                : ''}
              </div>

              <button type="submit" className="btn btn-primary">Reset</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

function mapStateToProps({ auth }) {
  return {
    error: auth.error,
    message: auth.message,
  };
}

export default connect(mapStateToProps, { recoverPassword })(RecoverPassword);
