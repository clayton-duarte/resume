import React, { memo } from 'react';

import { Row, Col } from './Grid';
import { SubTitle, Text, Label } from './Text';
import TimePeriod from './TimePeriod';
import Card from './Card';

import { useStateValue } from '../state';

const VolunteerExperience = () => {
  const [{ volunteerExperienceView }] = useStateValue();

  return (
    <>
      <SubTitle>> Volunteer Experience</SubTitle>
      <br />
      {volunteerExperienceView && volunteerExperienceView.elements.map((volunteering, index) => (
        <Card css="margin-bottom: 1rem" key={`volunteering-item-${index}`}>
          <Row>
            <Col grow="0" css="justify-content: center">
              <TimePeriod timePeriod={volunteering.timePeriod} />
            </Col>
            <Col css="justify-content: center">
              <Text><strong>{volunteering.role}</strong></Text>
              <Text>{volunteering.companyName}</Text>
            </Col>
          </Row>
        </Card>
      ))}
    </>
  );
}

export default memo(VolunteerExperience);
