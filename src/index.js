import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from 'routes';
import { UserProvider } from 'context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <Router />
    </UserProvider>
  </React.StrictMode>
);
