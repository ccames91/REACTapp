import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ChandlerBio from './ChandlerBio'; // Import the ChandlerBio component
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChandlerBio /> {/* Render the ChandlerBio component */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();