import { useEffect } from "react";
import simonDiceImg from "../assets/simonDice.png";
import tatetiImg from "../assets/tateti.png";
import pptImg from "../assets/piedraPapelTijera.png";
import portfolioImg from "../assets/portfolio.png";

export default function Projects() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll(".project-card, #projects h2").forEach(el =>
      observer.observe(el)
    );
  }, []);

  return (
    <section id="projects">
      <h2 className="animate">Proyectos</h2>
      <div className="projects-grid">
        
        <div className="project-card animate">
          <img src={portfolioImg} alt="Portfolio Web" />
          <div className="content">
            <h3>Portfolio Web</h3>
            <p>Portfolio personal creado con React y CSS.</p>
          </div>
        </div>

        <div className="project-card animate">
          <img src={simonDiceImg} alt="Juego Simón Dice" />
          <div className="content">
            <h3>Simón Dice</h3>
            <p>Juego de memoria hecho en HTML, CSS y JS con Node.js en el backend.</p>
          </div>
        </div>

        <div className="project-card animate">
          <img src={tatetiImg} alt="Juego TaTeTi" />
          <div className="content">
            <h3>TaTeTi</h3>
            <p>Juego clásico de tres en línea con estadísticas de jugadores.</p>
          </div>
        </div>

        <div className="project-card animate">
          <img src={pptImg} alt="Piedra, Papel o Tijera" />
          <div className="content">
            <h3>Piedra, Papel o Tijera</h3>
            <p>Juego simple para practicar lógica con frontend en JS y Node.js.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
