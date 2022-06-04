import React from 'react';
import GlobalStyle from 'styles/GlobalStyle';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import Router from './Router';
import theme from 'styles/theme';

const container = document.getElementById('root');
const root = createRoot(container as Element);

root.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </>,
);
