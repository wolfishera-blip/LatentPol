import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Mirrors vite's `base` ("/LatentPol/") so the router strips the subfolder
// before matching routes. React Router wants it without the trailing slash.
const basename = import.meta.env.BASE_URL.replace(/\/+$/, '');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
