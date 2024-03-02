import React from 'react';

import Home from './Containers/Home/index.js';
import Users from './Containers/Users/index2.js';
import { createRoot } from 'react-dom/client';
import GlobalStyle from './style/globalStyle.js';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Users />
    <GlobalStyle />
  </React.StrictMode>
);