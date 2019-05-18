import React from 'react';
import App, { Container } from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import initialState from '../state/initialState';
import { StateProvider } from '../state';
import reducer from '../state/reducer';
import defaultTheme from '../theme';

const GlobalStyle = createGlobalStyle`
body {
  font-family: ${props => props.theme.family};
  background-color: ${props => props.theme.bg};
  font-size: ${props => props.theme.rem};
  color: ${props => props.theme.black};
  margin: 0;
  a {
    color: ${props => props.theme.primary};
    margin: ${props => props.theme.margin};
  }
  hr {
    border: unset;
    background: linear-gradient(
      to right,
      transparent,
      ${props => props.theme.shadow},
      ${props => props.theme.shadow},
      transparent
    );
    margin: ${props => props.theme.gut}; 1rem;
    height: 1px;
  }
}
`;

export default class extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return pageProps;
  }

  state = {};

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={defaultTheme}>
        <>
          <Container>
            <StateProvider initialState={initialState} reducer={reducer}>
              <Component {...pageProps} />
            </StateProvider>
          </Container>
          <GlobalStyle />
        </>
      </ThemeProvider>
    )
  }
}