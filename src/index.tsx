import React from 'react';
import ReactDOM from 'react-dom';
import SkeBasis from '@skatteetaten/frontend-components/SkeBasis';
import App from './web/App';
import './web/index.css';

ReactDOM.render(
  <SkeBasis>
    <App />
  </SkeBasis>,
  document.getElementById('root')
);
