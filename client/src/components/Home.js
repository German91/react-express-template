import React, { Component } from 'react';

import Modal from './Modal';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  closeModal() {
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-10 col-sm-offset-1">
            <h1>Home Page</h1>
            <hr/>

            <button type="button" className="btn btn-primary" onClick={this.openModal}>Click me!</button>
          </div>
        </div>

        <Modal isOpen={this.state.isOpen} closeModal={this.closeModal} title="Home modal">
          <h3>Modal Example</h3>
        </Modal>
      </div>
    );
  }
};
