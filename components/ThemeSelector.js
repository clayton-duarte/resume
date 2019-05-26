import React, { memo, useEffect, useState } from 'react';
import MdColorPalette from 'react-ionicons/lib/MdColorPalette';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';

import { Row, Col } from './Grid';
import { useStateValue } from '../state';
import twitterBootstrap from '../theme/twitter';
import googleSearch from '../theme/google';
import discord from '../theme/discord';
import monochrome from '../theme';

const cornerSize = Math.sqrt(2) * 15;
const close = (-cornerSize / 1.5);
const open = (-cornerSize / 2);

const Corner = styled.button`
filter: drop-shadow(0 0 .25rem ${props => props.theme.shadow});
right: ${props => props.open ? open : close}rem;
top: ${props => props.open ? open : close}rem;
background: ${props => props.theme.secondary};
transform: rotate(-45deg);
flex-direction: column;
height: ${cornerSize}rem;
width: ${cornerSize}rem;
position: fixed;
cursor: pointer;
outline: unset;
border: unset;
display: flex;
z-index: 1;
aside {
  transform: scale(${props => props.open ? 1 : 0});
  &:hover {
    transform: scale(${props => props.open ? 1.2 : 0});;
  }
}
`;

const IconWrapper = styled.div`
pointer-events: none;
position: fixed;
cursor: pointer;
right: .5rem;
top: .5rem;
z-index: 1;
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
z-index: 1;
`;

const CornerLabel = styled.p`
transform-origin: top left;
transform: rotate(90deg);
pointer-events: none;
margin-bottom: 1rem;
position: absolute;
font-weight: bold;
margin: 0 1rem;
width: inherit;
color: white;
z-index: 0;
left: 0;
`;

const themes = { monochrome, googleSearch, twitterBootstrap, discord };

const themeList = Object.keys(themes);
const ThemeSelector = () => {
  const [cookies, setCookie] = useCookies(['theme']);
  const [, dispatch] = useStateValue();
  const [selected, setSelected] = useState('monochrome');
  const [open, setOpen] = useState(false);

  const humanizeThemeName = camel => camel.split(/(?=[A-Z])/g).join(' ').toLowerCase();

  const changeTheme = (themeName = 'monochrome') => {
    dispatch({ type: 'changeTheme', payload: themes[themeName] });
    setTimeout(() => setSelected(themeName), 300);
    setCookie('theme', themeName, { path: '/' });
    setOpen(false);
  };

  useEffect(() => {
    if (cookies.theme) return changeTheme(cookies.theme);
    return changeTheme();
  }, []);

  return (
    <>
      <Corner open={open} onClick={() => setOpen(!open)} onBlur={() => setOpen(false)}>
        <Row css="flex-grow: 1;">
          <Col css="justify-content: center;">
            {themeList.map((theme, index) => (
              (theme !== selected) &&
              <Palette
                key={`theme-selector-${index}`}
                onClick={() => changeTheme(theme)}
                title={humanizeThemeName(theme)}
                theme={themes[theme]}
              />
            ))}
          </Col>
        </Row>
        <CornerLabel>{humanizeThemeName(selected)}</CornerLabel>
      </Corner>
      <IconWrapper>
        <MdColorPalette color="white" fontSize="3rem" />
      </IconWrapper>
    </>
  );
};

export default ThemeSelector;
