import React from 'react';
import ReactDOM from 'react-dom';
import Home from './src/Container/home';
import { createRoot } from 'react-dom/client';
import GlobalStyle from './style/globalStyle.js';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    <GlobalStyle />
  </React.StrictMode>
);