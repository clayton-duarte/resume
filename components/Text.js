import React from 'react';
import styled from 'styled-components';

const commonStyles = ({ theme }) => `
font-family: ${theme.family};
`

export const P = styled.p`
${props => commonStyles(props)};
`;

export const Title = styled.h1`
${props => commonStyles(props)};
`;

export const SubTitle = styled.h2`
${props => commonStyles(props)};
`;

export const Label = styled.label`
${props => commonStyles(props)};
`;

export default ({ title, subTitle, label, ...props }) => {
  if (title) return <Title {...props} />;
  if (subTitle) return <SubTitle {...props} />;
  if (label) return <Label {...props} />;
  return <P {...props} />;
}
