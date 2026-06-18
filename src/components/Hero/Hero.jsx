import { motion } from "framer-motion";
import { FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";
import "./Hero.css";
export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="side-social">
        <a href="https://github.com/M4GeeZ" target="_blank">
          <FiGithub />
        </a>
        <a href="https://www.linkedin.com/in/mughees-rehman-4600753bb/" target="_blank">
          <FiLinkedin />
        </a>
      </div>
      <a className="side-email" href="mailto:mughees1275@gmail.com">
        mughees1275@gmail.com
      </a>
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="status">
          <i />
          Available for work
        </span>
        <h1>
          <span>FULL STACK</span>
          <b> DEVELOPER</b>
        </h1>
        <h2>Junior Software Engineer</h2>
        <p>
          Building scalable, modern, and user-focused web applications with
          React.js, Node.js, MongoDB, UI/UX principles and DevOps mindset.
        </p>
        <div className="hero-actions">

<a href="/Mughees-Ur-Rehman_CV.pdf" download className="btn cv-btn">
  <span>Download Resume</span>
</a>

          <a className="btn ghost" href="#projects">
            View Projects
          </a>
        </div>
      </motion.div>
    </section>
  );
}
