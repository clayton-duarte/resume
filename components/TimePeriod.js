import React from 'react';
import styled from 'styled-components';

import { Text } from './Text';

const Date = styled(Text)`
color: ${props => props.theme.secondary};
text-align: center;
font-size: 1.75rem;
&:first-child {
  border-bottom: 1px solid ${props => props.theme.shadow};
}
`;

const TimePeriod = ({ timePeriod }) => {
  return (
    <>
      <Date>{timePeriod.endDate ? timePeriod.endDate.year : 'now'}</Date>
      <Date>{timePeriod.startDate.year}</Date>
    </>
  );
};

export default TimePeriod;