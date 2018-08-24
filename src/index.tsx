import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { history } from './history';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root') as HTMLElement,
);
