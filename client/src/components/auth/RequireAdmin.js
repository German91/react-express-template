import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object
    }

    redirectBack() {
      this.context.router.history.push('/');
    }

    checkRole() {
      if (this.props.authenticated && this.props.profile) {
        if (this.props.profile.roles.indexOf('ADMIN') < 0) {
          this.redirectBack();
        }
      } else {
        this.redirectBack();
      }
    }

    componentWillMount() {
      this.checkRole();
    }

    componentWillUpdate(nextProps) {
      this.checkRole();
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps({ auth }) {
    return {
      authenticated: auth.authenticated,
      profile: auth.profile
    }
  }

  return connect(mapStateToProps)(Authentication);
}
