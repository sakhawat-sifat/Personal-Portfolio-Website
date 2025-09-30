import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './critical.css'; // Load critical CSS first
import './index.css';
import { initializePerformanceTracking } from './utils/performance.ts';
import { registerServiceWorker } from './utils/serviceWorker.ts';

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  initializePerformanceTracking();
  
  // Register service worker for caching and offline functionality
  window.addEventListener('load', () => {
    registerServiceWorker();
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
