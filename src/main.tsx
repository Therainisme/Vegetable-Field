import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


import './assets/bootstrap/css/bootstrap.min.css';
import './assets/fonts/ionicons.min.css';
import './assets/css/Article-Clean.css';
import './assets/css/Footer-Basic.css';
import './assets/css/Navigation-with-Button.css';
import './assets/css/Highlight-Clean.css';
import './assets/css/Features-Clean.css';
import './assets/css/styles.css';

import "./assets/fonts/font-awesome.min.css";;
import "./assets/fonts/ionicons.min.css";


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
