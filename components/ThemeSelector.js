import React, { memo } from 'react';
import styled from 'styled-components';

import { useStateValue } from '../state';

const size = "6rem";

const Corner = styled.aside`
filter: drop-shadow(0 0 .25rem ${props => props.theme.shadow});
border-top: ${size} solid ${props => props.theme.secondary};
border-left: ${size} solid transparent;
position: fixed;
height: 0;
width: 0;
right: 0;
top: 0;
`;

const Icon = styled.img`
position: fixed;
height: auto;
right: .25rem;
width: 3rem;
top: .25rem;
`;

const ThemeSelector = () => {
  const [{ theme }, dispatch] = useStateValue();

  const changeTheme = () => dispatch({
    type: 'changeTheme',
    payload: { primary: 'tomato'}
  });

  return (
    <>
      <Corner onClick={changeTheme} />
      <Icon alt="palette" src="static/palette.svg" onClick={changeTheme} />
    </>
  );
};

export default memo(ThemeSelector);
