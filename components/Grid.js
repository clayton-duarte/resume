import React from 'react';
import styled from 'styled-components';

const commonStyles = () => `
flex-direction: column;
display: flex;
`

export const Box = styled.section`
${props => commonStyles(props)};
max-width: ${({ theme, container }) => container ? theme.bp.lg : 'unset'};
margin: ${({ container }) => container ? '0 auto' : '0'};
padding: ${props => props.theme.gut} 0;
`;

export const Row = styled.div`
${props => commonStyles(props)};
padding: 0 ${props => props.theme.gut};
flex-wrap: wrap;
flex-grow: 1;
@media all and (min-width: ${({ theme, bp }) => theme.bp[bp || 'xs']}) {
  flex-direction: row;
}
`;

export const Col = styled.div`
${props => commonStyles(props)};
margin: ${props => props.theme.gut};
flex-grow: ${props => props.grow || 1};
justify-content: stretch;
flex-basis: 0;
`;

export const Container = props => <Box container {...props} />;

export default ({ container, row, col, ...props }) => {
  if (container) return <Container {...props} />;
  if (row) return <Row {...props} />;
  if (col) return <Col {...props} />;
  return <Box {...props} />;
};
