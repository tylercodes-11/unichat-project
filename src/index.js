import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

var cors = require('cors');

app.use(cors());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
