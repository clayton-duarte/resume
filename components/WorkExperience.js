import React, { memo } from 'react';

import { Row, Col } from './Grid';
import { SubTitle, Text, Label } from './Text';
import TimePeriod from './TimePeriod';
import Card from './Card';

import { useStateValue } from '../state';

const WorkExperience = () => {
  const [{ positionView }] = useStateValue();

  return (
    <>
      <SubTitle>> Work Experience</SubTitle>
      <br />
      {positionView && positionView.elements.map((position, index) => (
        <Card css="margin-bottom: 1rem" key={`job-item-${index}`}>
          <Row>
            <Col grow="0" css="justify-content: center">
              <TimePeriod timePeriod={position.timePeriod} />
            </Col>
            <Col css="justify-content: center">
              <Label>{position.locationName}</Label>
              <Text>
                <strong>
                  {position.title}
                </strong>
              </Text>
              <Text>{position.companyName}</Text>
            </Col>
          </Row>
        </Card>
      ))}
    </>
  );
}

export default memo(WorkExperience);
