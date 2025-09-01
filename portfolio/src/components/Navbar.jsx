import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Mi Portafolio</div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><a href="#hero">Inicio</a></li>
        <li><a href="#skills">Habilidades</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>

      <div 
        className={`burger ${menuOpen ? "toggle" : ""}`} 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}
