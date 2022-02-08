import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fortawesome/fontawesome-free/js/all.js';
import App from './App';
import { getMenus } from './service/noAuthService';

const menus = getMenus().then(
  res => {
    console.log(res);
    return res.data.productList;
  }
);

ReactDOM.render(
  <React.StrictMode>
    <App menus={menus}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
