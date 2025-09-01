import { useEffect } from "react";
import miFoto from "../assets/profile.jpeg";

export default function Hero() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('.hero-content').forEach(el => observer.observe(el));
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content animate">
        <img src={miFoto} alt="" className="hero-photo" />
        <h1 className="hero-title">Hola, soy Thiago</h1>
        <p className="hero-subtitle">Desarrollador Web y Empresario</p>
      </div>
    </section>
  );
}
