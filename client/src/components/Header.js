import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';

class Header extends Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logoutUser();
  }

  render() {
    const { auth, user } = this.props;

    console.log(user);

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
          </ul>

          <ul className="navbar-nav mr-sm-2">
            {!auth &&
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            }

            {!auth &&
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Sign Up</Link>
              </li>
            }

            {auth && user ?
              <li className="nav-item">
                <Link className="nav-link" to="/profile">{user.username}</Link>
              </li>
            : ''}

            {auth && user ?
              <li className="nav-item">
                <a role="button" onClick={this.handleLogout} className="nav-link">Logout</a>
              </li>
            : ''}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth, user }) {
  return { auth, user };
}

export default connect(mapStateToProps, actions)(Header);
