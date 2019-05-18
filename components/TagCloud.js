import React, { memo } from 'react';
import styled from 'styled-components'

import { Row, Col } from './Grid';
import { SubTitle, Text, Label } from './Text';

const Tag = styled.span`
box-shadow: 0 0 .25rem 0 ${props => props.theme.shadow};
border-radius: ${props => props.theme.radius};
background: ${props => props.theme.white};
padding: ${props => props.theme.padding};
margin: ${props => props.theme.gut};
border-radius: 3rem;
text-align: center;
overflow: hidden;
`;

const proficiencies = {
  ELEMENTARY: 'basic',
  FULL_PROFESSIONAL: 'advanced',
  NATIVE_OR_BILINGUAL: 'native',
};

const TagCloud = ({ title, list }) => (
  <>
    <SubTitle>> {title}</SubTitle>
    <br />
    <Row>
      {list.map((item, index) => (
        <Tag key={`${title}-tags-item-${index}`}>
          <Label css="margin:0">{item.name}</Label>
          {item.proficiency && <Label> - {proficiencies[item.proficiency]}</Label>}
        </Tag>
      ))}
    </Row>
  </>
);

export default memo(TagCloud);
