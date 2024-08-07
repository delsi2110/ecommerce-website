import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/reset.css';
import './App.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
