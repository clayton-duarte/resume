import styled from 'styled-components';

export default styled.div`
box-shadow: 0 .25rem 1rem 0 ${props => props.theme.shadow};
border-radius: ${props => props.theme.radius};
padding: ${props => props.theme.gut};
overflow: hidden;
`;