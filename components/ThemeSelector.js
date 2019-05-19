import React, { memo, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Row, Col } from './Grid';
import { useStateValue } from '../state';
import defaultTheme from '../theme';

const Corner = styled.button`
filter: drop-shadow(0 0 .25rem ${props => props.theme.shadow});
right: ${props => props.open ? '-14.5rem' : '-18rem'};
top: ${props => props.open ? '-14.5rem' : '-18rem'};
background: ${props => props.theme.primary};
transform: rotate(-45deg);
flex-direction: column;
position: fixed;
cursor: pointer;
outline: unset;
border: unset;
display: flex;
height: 25rem;
width: 25rem;
aside {
  transform: scale(${props => props.open ? 1 : 0});
  &:hover {
    transform: scale(${props => props.open ? 1.2 : 0});;
  }
}
`;

const Icon = styled.img`
pointer-events: none;
position: fixed;
cursor: pointer;
right: .25rem;
top: .25rem;
height: auto;
width: 3rem;
`;

const Palette = styled.aside`
border: 2px solid ${props => props.theme.white};
background: ${props => props.theme.primary};
box-sizing: border-box;
border-radius: 1.5rem;
color: transparent;
margin: .5rem 0;
height: 3rem;
width: 3rem;
`;

const themes = [
defaultTheme, // default
{ ...defaultTheme, primary: 'tomato' },
{ ...defaultTheme, primary: 'blue' },
{ ...defaultTheme, primary: 'red' },
];

const ThemeSelector = () => {
  const [{ theme }, dispatch] = useStateValue();
  const [selected = 0, setSelected] = useState();
  const [open, setOpen] = useState();

  const changeTheme = (themeId) => {
    dispatch({
      type: 'changeTheme',
      payload: themes[themeId],
    });
    setTimeout(() => setSelected(themeId), 300);
    setOpen(false);
  }

  useEffect(() => {
    document.title = open;
  });

  return (
    <>
      <Corner open={open} onClick={() => setOpen(!open)} onBlur={() => setOpen(false)}>
        <Row>
          <Col css="flex-grow:0;margin-top:6.5rem;">
            {themes.map((theme, index) => (
              index !== selected && 
                <Palette theme={theme} onClick={() => changeTheme(index)} />
            ))}
          </Col>
        </Row>
      </Corner>
      <Icon open={open} alt="palette" src="static/palette.svg" />
    </>
  );
};

export default memo(ThemeSelector);
