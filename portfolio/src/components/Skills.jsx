import { useEffect } from "react";

// Importa tus íconos desde assets
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import jsIcon from "../assets/js.png";
import reactIcon from "../assets/react.png";
import nodeIcon from "../assets/node.png";
import mysqlIcon from "../assets/mysql.png";
import gitIcon from "../assets/git.png";

export default function Skills() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    document
      .querySelectorAll(".skill-card, #skills h2")
      .forEach(el => observer.observe(el));
  }, []);

  const skills = [
    { name: "HTML5", icon: htmlIcon },
    { name: "CSS3", icon: cssIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "React", icon: reactIcon },
    { name: "Node.js", icon: nodeIcon },
    { name: "MySQL", icon: mysqlIcon },
    { name: "Git & GitHub", icon: gitIcon },
  ];

  return (
    <section id="skills">
      <h2 className="animate">Habilidades</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card animate">
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
