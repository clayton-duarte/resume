import React, { memo } from 'react';

import { Row, Col } from './Grid';
import { SubTitle, Text, Label } from './Text';
import TimePeriod from './TimePeriod';
import Card from './Card';

import { useStateValue } from '../state';

const WorkExperience = () => {
  const [{ positionGroupView }] = useStateValue();

  return (
    <>
      <SubTitle>> Recent Work Experience</SubTitle>
      <br />
      {positionGroupView && positionGroupView.elements.map((position, index) => (
        <Card css="margin-bottom: 1rem" key={`job-item-${index}`}>
          <Row>
            <Col grow="0" css="justify-content: center">
              <TimePeriod timePeriod={position.timePeriod} />
            </Col>
            <Col css="justify-content: center">
            <Text>{position.name}</Text>
            {position.positions.map((role) => (
              <Text><strong>{role.title}</strong></Text>
            ))}
            </Col>
          </Row>
        </Card>
      ))}
    </>
  );
}

export default memo(WorkExperience);
