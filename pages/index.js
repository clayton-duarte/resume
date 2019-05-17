import React from 'react';

import { Container, Row, Col } from '../components/Grid';
import WorkExperience from '../components/WorkExperience';
import Education from '../components/Education';
import Summary from '../components/Summary';
import Contact from '../components/Contact';

const Home = () => (
  <>
    <Container>
      <Row bp="sm">
        <Col>
          <Summary />
        </Col>
        <Col css={`@media all and (min-width: ${props => props.theme.bp.sm}){text-align: right}`}>
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
