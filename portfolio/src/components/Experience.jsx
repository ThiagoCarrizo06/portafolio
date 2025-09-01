import { useEffect } from "react";

export default function Experience() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('.experience-card, #experience h2').forEach(el => observer.observe(el));
  }, []);

  return (
    <section id="experience">
      <h2 className="animate">Experiencia</h2>
      <div className="experience-card animate">
        <p>
          Soy desarrollador en formación, con proyectos de práctica en frontend y backend. 
          Experiencia trabajando en juegos web, aplicaciones con React y Node.js.
        </p>
      </div>
    </section>
  );
}
