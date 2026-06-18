import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import "./Contact.css";
export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <p className="eyebrow">Contact</p>
      <h2 className="section-title">
        Let’s Build <span>Something</span>
      </h2>
      <p className="contact-text">
        Available for junior developer roles, paid internships, freelance
        projects and collaboration.
      </p>
      <div className="contact-links">
        <a className="glass" href="mailto:mughees1275@gmail.com">
          <FiMail />
          Email Me
        </a>
        <a className="glass" href="https://github.com/M4GeeZ" target="_blank">
          <FiGithub />
          GitHub
        </a>
        <a className="glass" href="https://www.linkedin.com/in/mughees-rehman-4600753bb/" target="_blank">
          <FiLinkedin />
          LinkedIn
        </a>
      </div>
    </section>
  );
}
