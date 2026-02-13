import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { Toaster } from "react-hot-toast";
import { StrictMode } from 'react';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#0f172a",
            color: "#14f195",
            border: "1px solid #14f195",
          },
        }}
      />
    </BrowserRouter>
  </StrictMode>,
)
