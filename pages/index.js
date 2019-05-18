import React, { memo } from 'react';

import { Container, Row, Col } from '../components/Grid';
import VolunteerExperience from '../components/VolunteerExperience';
import WorkExperience from '../components/WorkExperience';
import ThemeSelector from '../components/ThemeSelector';
import Education from '../components/Education';
import TagCloud from '../components/TagCloud';
import Summary from '../components/Summary';
import Contact from '../components/Contact';
import Social from '../components/Social';

import { useStateValue } from '../state';

const Home = () => {
  const [{ languageView, skillView }] = useStateValue();

  return (
    <>
      <ThemeSelector />

      <Container>
        <Row bp="sm" css={`@media all and (min-width: ${({ theme }) => theme.bp.sm}) {align-items:flex-end;}`}>
          <Col>
            <Summary />
          </Col>
          <Col>
            <Contact />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row bp="md">
          <Col>
            <WorkExperience />
          </Col>

          <Col>
            <Education />
            <VolunteerExperience />
          </Col>
        </Row>
      </Container>
      
      <Container>
        <Row bp="sm">
          <Col>
            <TagCloud title="Languages" list={languageView.elements} />
          </Col>

          <Col>
            <TagCloud title="Key Skills" list={skillView.elements} />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row css="justify-content:center;align-items:center">
          <Social />
        </Row>
      </Container>
    </>
  );
}


export default memo(Home);
