import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Router.react';
const startApp = () => {
  if (isAppReady) { // eslint-disable-line no-undef
    ReactDOM.render(<AppRouter />, document.getElementById('app'));
  } else {
    setTimeout(() => { startApp(); }, 500);
  }
};
startApp();
