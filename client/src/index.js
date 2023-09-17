import React from 'react';
import  ReactDOM  from 'react-dom';
import App from './App';
import './index.css';
import Darkmode from 'darkmode-js';
import { BrowserRouter } from "react-router-dom";




ReactDOM.render(
    <BrowserRouter>
     <React.StrictMode>
        <App />
    </React.StrictMode>
    </BrowserRouter>,document.getElementById('root')
)


new Darkmode().showWidget();
const options = {
    bottom: '64px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
  }
  
  const darkmode = new Darkmode(options);
  darkmode.showWidget();