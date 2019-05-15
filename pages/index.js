import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
color: ${props => props.theme.primary};
`;

const Home = () => (
  <>
    <Text>test</Text>
  </>
);

export default Home;
