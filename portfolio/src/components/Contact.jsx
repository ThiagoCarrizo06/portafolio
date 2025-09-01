import { useState, useEffect } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name:"", email:"", message:"" });
  const [status, setStatus] = useState("");

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = e => {
    e.preventDefault();
    setStatus("✅ Tu mensaje fue enviado con éxito.");
    setFormData({ name:"", email:"", message:"" });
    setTimeout(() => setStatus(""), 4000);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.3 });
    document.querySelectorAll('#contact h2, form').forEach(el => observer.observe(el));
  }, []);

  return (
    <section id="contact">
      <h2 className="animate">Contacto</h2>
      <form onSubmit={handleSubmit} className="animate">
        <input type="text" name="name" placeholder="Tu nombre" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Tu correo" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Tu mensaje" rows="5" value={formData.message} onChange={handleChange} required></textarea>
        <button type="submit">Enviar</button>
      </form>
      {status && <p className="form-status">{status}</p>}
    </section>
  );
}
