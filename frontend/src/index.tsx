import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import darkTheme from './themes/darkTheme';
import { CssBaseline, ThemeProvider } from '@mui/material';

// const root = ReactDOM.createRoot(document.getElementById('root'));
const rootElement = document.getElementById("root");
if(!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
