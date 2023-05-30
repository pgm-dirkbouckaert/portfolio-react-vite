import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './assets/css/reset.css';
import './assets/css/main.css';
import { LanguageProvider } from './contexts/language.context';
import { ActiveNavItemProvider } from './contexts/active-navitem.context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <ActiveNavItemProvider>
        <App />
      </ActiveNavItemProvider>
    </LanguageProvider>
  </React.StrictMode>
);
