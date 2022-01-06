import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fortawesome/fontawesome-free/js/all.js';
import App from './app';
import UserAuth from './service/userAuth';

const userAuth = new UserAuth();

ReactDOM.render(
  <React.StrictMode>
    <App userAuth={userAuth}/>
  </React.StrictMode>,
  document.getElementById('root')
);
