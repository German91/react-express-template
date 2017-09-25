import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

export default class ReactModal extends Component {
  render() {
    return (
      <Modal show={this.props.isOpen} onHide={this.props.closeModal}>
        <Modal.Header closeButton>
          {this.props.title}
        </Modal.Header>

        <Modal.Body>
          {this.props.children}
        </Modal.Body>
      </Modal>
    );
  }
};

ReactModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};
