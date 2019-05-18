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

const WorkExperience = () => {
  const [{ positionGroupView }] = useStateValue();

  return (
    <>
      <SubTitle>> Recent Work Experience</SubTitle>
      <br />
      {positionGroupView && positionGroupView.elements.map((position, index) => (
        <Card css="margin-bottom: 1rem" key={`job-item-${index}`}>
          <Row bp="xs">
            <Col grow="0" css="justify-content: center">
              <TimePeriod timePeriod={position.timePeriod} />
            </Col>
            <ResponsiveCol>
              {position.positions.map((role, index) => (
                <div key={`job-title-${index}`}>
                  {role.locationName && <Label>{role.locationName}</Label>}
                  <Text><strong>{role.title}</strong></Text>
                </div>
              ))}
              <Text>{position.name}</Text>
            </ResponsiveCol>
          </Row>
        </Card>
      ))}
    </>
  );
}

export default memo(WorkExperience);
