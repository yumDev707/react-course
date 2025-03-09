import { Route, Routes, Navigate } from 'react-router-dom';
import { GifExpertApp } from './GifExpertApp';
import { AboutPage } from './components/About/AboutPage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<GifExpertApp />} />
      <Route path="/about" element={<AboutPage />} />
      {/* Redirección por defecto si la ruta no existe */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};