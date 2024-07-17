// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from correct path
import './main.css'; // Import your main CSS file
import App from './App'; // Import your root component

const rootElement = document.getElementById('root');

// Use createRoot to render your application
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);