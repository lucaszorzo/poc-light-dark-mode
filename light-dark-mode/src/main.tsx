import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeContext } from 'bm-design-system';
import './styles/themes.styles.scss';
import './styles/ThemeContextProvider.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(

  <ThemeContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeContext>
);
