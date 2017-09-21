import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const email = this.refs.email.value.trim();

    this.props.forgotPassword(email);
  }

  renderAlert() {
    if (this.props.error) {
      return (
        <div className="alert alert-danger">
          <strong>{this.props.error}</strong>
        </div>
      );
    } else if (this.props.message) {
      return (
        <div className="alert alert-success">
          <strong>{this.props.message}</strong>
        </div>
      );
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

function mapStateToProps(state) {
  return {
    message: state.auth ? state.auth.message : '',
    error: state.auth ? state.auth.error : ''
  }
}

export default connect(mapStateToProps, actions)(ForgotPassword);
