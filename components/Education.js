import React, { memo } from 'react';

import { Row, Col } from './Grid';
import { SubTitle, Text } from './Text';
import TimePeriod from './TimePeriod';
import Card from './Card';

import { useStateValue } from '../state';

const Education = () => {
  const [{ educationView }] = useStateValue();

  return (
    <>
      <SubTitle>Education</SubTitle>
      <br />
      {educationView && educationView.elements.map((education, index) => (
        <Card css="margin-bottom: 1rem" key={`education-item-${index}`}>
          <Row>
            <Col grow="0" css="justify-content: center">
              <TimePeriod timePeriod={education.timePeriod} />
            </Col>
            <Col css="justify-content: center">
              <Text>
                <strong>
                  {education.degreeName} in {education.fieldOfStudy}
                </strong>
              </Text>
              <Text>{education.schoolName}</Text>
            </Col>
          </Row>
        </Card>
      ))}
    </>
  );
}

export default memo(Education);
