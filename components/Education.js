import React, { memo } from 'react';
import styled from 'styled-components';

import { Row, Col } from './Grid';
import { SubTitle, Text, Label } from './Text';
import TimePeriod from './TimePeriod';
import Card from './Card';

import { useStateValue } from '../state';

const ResponsiveCol = styled(Col)`
justify-content: center;
@media all and (max-width: ${({ theme }) => theme.bp.xs}) {
  text-align: center;
}
`;

const Education = () => {
  const [{ educationView }] = useStateValue();

  return (
    <>
      <SubTitle>> Education</SubTitle>
      <br />
      {educationView && educationView.elements.map((education, index) => (
        <Card css="margin-bottom: 1rem" key={`education-item-${index}`}>
          <Row bp="xs">
            <Col grow="0" css="justify-content: center">
              <TimePeriod timePeriod={education.timePeriod} />
            </Col>
            <ResponsiveCol css="justify-content: center">
              <Label>{education.degreeName}</Label>
              <Text><strong>{education.fieldOfStudy}</strong></Text>
              <Text>{education.schoolName}</Text>
            </ResponsiveCol>
          </Row>
        </Card>
      ))}
    </>
  );
}

export default memo(Education);
