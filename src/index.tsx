import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import theme from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import MyHeader from './MyHeader';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
  <React.StrictMode>
    <MyHeader/>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);


