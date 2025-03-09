import { Navbar } from '../Navbar/Navbar';
import './about.css';

export const AboutPage = () => {
    return (
      <>
        <Navbar />
        
        <h1>About me</h1>
        <p>Ésta es una aplicación para buscar gifs usando la API de Giphy.</p>
        <p>Hecha con 💜 y ☕ por Jenni para enseñar React a sus coders de RuralCamp.</p>
      </>
    );
  };
