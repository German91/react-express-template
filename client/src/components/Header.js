import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/authActions';
import _ from 'lodash';

class Header extends Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logoutUser();
  }

  renderRightLinks() {
    if (!this.props.authenticated) {
      return [
        <li key={1}><Link to="/login">Login</Link></li>,
        <li key={2}><Link to="/signup">Sign Up</Link></li>,
      ];
    } else if (this.props.authenticated && this.props.profile) {
      const profile = this.props.profile;
      let routes = [];

      const publicRoutes = [
        <li key={4}><Link to="/profile">{profile.username}</Link></li>,
        <li key={5}><Link to="" onClick={this.handleLogout}>Logout</Link></li>
      ];

      if (profile.roles.indexOf('ADMIN') > -1) {
        const adminRoutes = [
          <li key={3}><Link to="/admin">Admin Panel</Link></li>
        ];

        routes = _.concat(routes, adminRoutes);
      }

      return _.concat(routes, publicRoutes);
    }
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">React App</Link>
          </div>

          <div className="collapse navbar-collapse" id="navbar">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              {this.renderRightLinks()}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    authenticated: auth.authenticated,
    profile: auth.profile
  };
}

export default connect(mapStateToProps, actions)(Header);
