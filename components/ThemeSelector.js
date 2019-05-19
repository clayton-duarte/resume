import React, { memo, useEffect, useState } from 'react';
import MdColorPalette from 'react-ionicons/lib/MdColorPalette';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';

import { Row, Col } from './Grid';
import { useStateValue } from '../state';
import twitterTheme from '../theme/twitter';
import discordTheme from '../theme/discord';
import googleTheme from '../theme/google';
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

const Icon = styled.div`
pointer-events: none;
position: fixed;
cursor: pointer;
right: .25rem;
top: .25rem;
`;

const Palette = styled.aside`
border: 2px solid ${props => props.theme.white};
background: linear-gradient(
  135deg, 
  ${props => props.theme.primary} 50%, 
  ${props => props.theme.secondary} 50%
);
box-sizing: border-box;
border-radius: 1.5rem;
color: transparent;
margin: .5rem 0;
height: 3rem;
width: 3rem;
`;

const themes = [defaultTheme, googleTheme, twitterTheme, discordTheme];

const ThemeSelector = () => {
  const [cookies, setCookie] = useCookies(['theme']);
  const [, dispatch] = useStateValue();
  const [open, setOpen] = useState();

  const changeTheme = (themeId) => {
    dispatch({ type: 'changeTheme', payload: themes[themeId] });
    setTimeout(() => setCookie('theme', themeId, { path: '/' }), 300);
    setOpen(false);
  };

  useEffect(() => {
    if (cookies.theme) return changeTheme(cookies.theme);
    return changeTheme(0);
  }, []);

  return (
    <>
      <Corner open={open} onClick={() => setOpen(!open)} onBlur={() => setOpen(false)}>
        <Row>
          <Col css="flex-grow:0;margin-top:6.5rem;">
            {themes.map((theme, index) => (
              index !== Number(cookies.theme) &&
              <Palette theme={theme} onClick={() => changeTheme(index)} />
            ))}
          </Col>
        </Row>
      </Corner>
      <Icon>
        <MdColorPalette color="white" fontSize="3rem" />
      </Icon>
    </>
  );
};

export default memo(ThemeSelector);
