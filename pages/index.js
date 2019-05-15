import React from 'react';
import styled from 'styled-components';

import Card from '../components/Card';
import Box from '../components/Box';
import Row from '../components/Row';
import Col from '../components/Col';

const Home = () => (
  <>
    <Box>
      <Row bp="sm">
        <Col>
          <Card>Card</Card>
        </Col>
        <Col>
          <Card>Card</Card>
        </Col>
      </Row>
      <Row bp="md">
        <Col>
          <Card>Card</Card>
        </Col>
        <Col>
          <Card>Card</Card>
        </Col>
        <Col>
          <Card>Card</Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>Card</Card>
        </Col>
      </Row>
    </Box>
  </>
);

export default Home;
