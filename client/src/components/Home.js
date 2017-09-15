import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <Grid>
      <Row>
        <Col xs={12} sm={6} smOffset={3}>
          <h1>Home Page</h1>
          <hr/>
        </Col>
      </Row>
    </Grid>
  );
}

export default Home;
