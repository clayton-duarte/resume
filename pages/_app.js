import React from 'react';
import App, { Container } from 'next/app';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../theme';

export default class extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return pageProps;
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={defaultTheme}>
        <Container>
          <Component {...pageProps}/>
        </Container>
      </ThemeProvider>
    )
  }
}