import styled from 'styled-components';

export default styled.div`
box-shadow: 0 0 .25rem 0 ${props => props.theme.shadow};
border: 1px solid ${({ theme }) => theme.border ? theme.primary : 'transparent'};
border-radius: ${props => props.theme.radius};
background: ${props => props.theme.white};
padding: ${props => props.theme.gut};
box-sizing: border-box;
border-style: solid;
overflow: hidden;
`;