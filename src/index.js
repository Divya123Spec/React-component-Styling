import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "@volvo/vcdk/themes/all-semantic.css"; // Import all themes
import "@volvo/vcdk/themes/volvo/semantic-light.css";
import "@volvo/vcdk/themes/volvo/semantic-dark.css";
import { VcdkElement } from "@volvo/vcdk/vcdk-element";

// Set the default theme
VcdkElement.defaultTheme = "volvo-light";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
