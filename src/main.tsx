import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'hyun-design-system/dist/style.css';

const container = document.getElementById('root');

if (container) {
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
} else {
  console.error('Failed to find the root element.');
}
