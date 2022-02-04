import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fortawesome/fontawesome-free/js/all.js';
import App from './App';
import Authentication from './service/authentication';

const authentication = new Authentication();

ReactDOM.render(
  <React.StrictMode>
    <App authentication={authentication}/>
  </React.StrictMode>,
  document.getElementById('root')
);
