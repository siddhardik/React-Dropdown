// import React from 'react';  <React.StrictMode> </React.StrictMode>
import { StrictMode } from "react";
import ReactDOM from 'react-dom/client';
//  or direvtly {createRoot}
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);


