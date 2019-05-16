import React from 'react';
import styled from 'styled-components';

import { Container, Row, Col } from '../components/Grid';
import Summary from '../components/Summary';
import Card from '../components/Card';

const Home = () => (
  <>
    <Container>
      <Row>
        <Col>
          <Summary />
        </Col>
      </Row>
    </Container>
    <Container>
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
    </Container>
  </>
);

export default Home;
