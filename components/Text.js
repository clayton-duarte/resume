import React from 'react';
import styled from 'styled-components';

const commonStyles = ({ theme }) => `
font-family: ${theme.family};
margin: ${theme.margin}
`

export const Text = styled.p`
${props => commonStyles(props)};
font-size: 1rem;
`;

export const Title = styled.h1`
${props => commonStyles(props)};
font-size: 1.5rem;
`;

export const SubTitle = styled.h2`
${props => commonStyles(props)};
font-size: 1.2rem;
`;

export const Label = styled.label`
${props => commonStyles(props)};
font-weight: bold;
font-size: .8rem;
`;

export default ({ title, subTitle, label, ...props }) => {
  if (title) return <Title {...props} />;
  if (subTitle) return <SubTitle {...props} />;
  if (label) return <Label {...props} />;
  return <Text {...props} />;
}
