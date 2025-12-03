import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Los estilos se cargan vía CDN en index.html para asegurar compatibilidad

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);