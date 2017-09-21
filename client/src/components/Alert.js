import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Alert extends Component {
  render() {
    const alertType = `alert alert-${this.props.type}`;

    return (
      <div className={alertType}>
        <strong>{this.props.message}</strong>
      </div>
    );
  }
};

Alert.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default Alert;
