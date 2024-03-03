import React from 'react';

import Home from './Containers/Home/index.js';
import Users from './Containers/Users/index.js';
import { createRoot } from 'react-dom/client';
import GlobalStyle from './globalStyle.js';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Users />
    <GlobalStyle />
  </React.StrictMode>
);
