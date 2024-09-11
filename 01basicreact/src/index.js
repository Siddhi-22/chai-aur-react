import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {
      console.log(<App /> )
    }
  </React.StrictMode>
);

// If the <React.StrictMode> is removed then its called "Safe Mode".
