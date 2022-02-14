import React from 'react';
import ReactDOM from 'react-dom';
import '../src/common/reset.css';
import '../src/common/color.css';
import './index.css';
import '@fortawesome/fontawesome-free/js/all.js';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
