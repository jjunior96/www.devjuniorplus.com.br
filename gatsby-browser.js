/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import 'lazysizes';
import React from 'react';
import ReactDOM from 'react-dom';
import SwUpdater from './src/components/SwUpdater';

require('./src/styles/prims-theme/dracula/prism-dracula.css');

function onServiceWorkerUpdateReady() {
  const root = document.createElement('div');
  document.body.appendChild(root);
  console.log('SW Asks for update!');

  ReactDOM.render(<SwUpdater />, root);
}

export { onServiceWorkerUpdateReady };
