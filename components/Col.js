import styled from 'styled-components';

export default styled.div`
display: flex;
margin: ${props => props.theme.gut};
justify-content: stretch;
flex-direction: column;
flex-basis: 0;
flex-grow: 1;
`;
