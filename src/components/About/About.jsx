import { motion } from "framer-motion";
import "./About.css";
const stats = [
  ["1+", "Years Learning & Building"],
  ["15+", "Projects Completed"],
  ["3", "Core Tracks: Web UI DevOps"],
];
export default function About() {
  return (
    <section className="about reveal-section" id="about">
      <div className="orb">
        <span />
        <span />
        <span />
      </div>
      <motion.div
        className="about-grid"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <p className="eyebrow">About me</p>
          <h2 className="section-title">
            About <span>Me</span>
          </h2>
          <p className="about-text">
            I am a Full Stack MERN Developer, UI/UX Designer and DevOps learner
            focused on building clean, responsive and production-ready digital
            products.
          </p>
          <p className="about-text">
            I work with React.js, Node.js, Express, MongoDB, REST APIs,
            Tailwind/CSS and modern deployment workflows. My goal is simple:
            build interfaces that look premium, feel smooth and solve real
            problems.
          </p>
        </div>
        <div className="stats">
          {stats.map((s, i) => (
            <div className="stat glass" key={i}>
              <strong>{s[0]}</strong>
              <span>{s[1]}</span>
            </div>
          ))}
        </div>
      </motion.div>
      <div className="education glass">
        <div>
          <small>Education</small>
          <h3>ADP / Computer Science</h3>
          <p>
            Focused on software engineering, full stack development and
            practical project building.
          </p>
        </div>
        <b>CS</b>
      </div>
    </section>
  );
}
