import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Global error handler for unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  console.error('Global Unhandled Promise Rejection:', event.reason);
});

window.addEventListener('error', (event) => {
  console.error('Global Uncaught Error:', event.error || event.message);
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
