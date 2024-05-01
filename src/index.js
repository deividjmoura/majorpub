import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // if you kept this file
import App from './App'; // modify this if you renamed or deleted App.js

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* modify this if you renamed or deleted App.js */}
  </React.StrictMode>,
  document.getElementById('root')
);

