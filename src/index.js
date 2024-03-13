
import React from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyle from './globalStyle.js';
import Routes from './routes.js';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < Routes />
    <GlobalStyle />
  </React.StrictMode>
);