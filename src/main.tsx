import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Buffer } from 'buffer'; //comment from this line
window.Buffer = Buffer; // to this line

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);