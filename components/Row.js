import styled from 'styled-components';

export default styled.div`
display: flex;
padding: 0 ${props => props.theme.gut};
flex-direction: column;
flex-wrap: wrap;
flex-grow: 1;
// RESPONSIVE
@media all and (min-width: ${({ theme, bp }) => theme.bp[bp || 'xs']}) {
  flex-direction: row;
}
`;
