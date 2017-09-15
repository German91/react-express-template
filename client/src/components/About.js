import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class About extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={6} smOffset={3}>
            <h1>About Page</h1>
            <hr/>
          </Col>
        </Row>
      </Grid>
    );
  }
}
