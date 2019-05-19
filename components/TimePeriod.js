import React from 'react';
import styled from 'styled-components';

import { Text } from './Text';

const Date = styled(Text)`
color: ${props => props.theme.primary};
margin: .25rem 1rem 0 0;
text-align: center;
font-size: 1.2rem;
&:first-child {
  border-bottom: 2px solid ${props => props.theme.primary};
}
`;

const months = [, 'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'oct', 'sep', 'nov', 'dec'];

const formatDate = (date) => {
  if (date) {
    if (date.month) return `${months[date.month]}/${date.year}`;
    return date.year;
  }
  return 'present';
}

const TimePeriod = ({ timePeriod }) => (
  <>
    <Date>{formatDate(timePeriod.endDate)}</Date>
    <Date>{formatDate(timePeriod.startDate)}</Date>
  </>
);

export default TimePeriod;