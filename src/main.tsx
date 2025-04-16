import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Preload critical images
const preloadImages = () => {
  const images = [
    'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200',
  ];
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

// Initialize app after DOM content is loaded
const initializeApp = () => {
  const root = document.getElementById('root');
  if (root) {
    createRoot(root).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  }
};

// Start preloading images immediately
preloadImages();

// Initialize app
initializeApp();