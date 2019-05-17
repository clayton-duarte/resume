import React from 'react';

import { Container, Row, Col } from '../components/Grid';
import WorkExperience from '../components/WorkExperience';
import Education from '../components/Education';
import Summary from '../components/Summary';
import Contact from '../components/Contact';
import Card from '../components/Card';

import { useStateValue } from '../state';

const Home = () => (
  <>
    <Container>
      <Row>
        <Col>
          <Summary />
        </Col>
        <Col css="text-align: right">
          <Contact />
        </Col>
      </Row>
    </Container>

    <Container>
      <Row>
        <Col>
          <Education />
        </Col>
      </Row>

      <Row>
        <Col>
          <WorkExperience />
        </Col>
      </Row>
    </Container>
  </>
);


export default Home;
