import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeContextProvider from './contexts/ThemeContext';

import { HashRouter as Router } from 'react-router-dom'; // Import HashRouter
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <Router> {/* Wrap your App with Router */}
        <App />
      </Router>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
