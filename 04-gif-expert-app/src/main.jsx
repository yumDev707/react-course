import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { GifExpertApp } from './GifExpertApp';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './AppRouter';
import '@styles/index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Envolvemos la app con el BrowserRoter de React Router. */}
    <BrowserRouter> 
      {/* <GifExpertApp /> */}
      <AppRouter />
    </BrowserRouter>
  </StrictMode>,
)