import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Profile extends Component {
  render() {
    const profile = this.props.profile;

    if (!profile) {
      return <div>Loading...</div>
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-sm-offset-3">
            <h1>Profile</h1>
            <hr/>

            <p>Id: {profile._id}</p>
            <p>Username: {profile.username}</p>
            <p>Email: {profile.email}</p>
            <p>Roles: {profile.roles.toString()}</p>
          </div>
        </div>
      </div>
    );
  }
};

Profile.propTypes = {
  profile: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    roles: PropTypes.array.isRequired
  })
};

function mapStateToProps({ auth }) {
  return {
    profile: auth.profile
  }
}

export default connect(mapStateToProps, null)(Profile);
