import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {
  render() {
    const { user } = this.props;

    console.log(user);

    return (
      <div>
        <h1>Profile page</h1>
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps)(Profile);
