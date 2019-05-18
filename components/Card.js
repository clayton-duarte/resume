import styled from 'styled-components';

export default styled.div`
box-shadow: 0 0 .25rem 0 ${props => props.theme.shadow};
border-radius: ${props => props.theme.radius};
background: ${props => props.theme.white};
padding: ${props => props.theme.gut};
overflow: hidden;
`;