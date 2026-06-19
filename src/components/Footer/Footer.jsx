import { FiGithub, FiLinkedin, FiArrowUpRight } from "react-icons/fi";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <h2>MUGHEES UR REHMAN</h2>
          <p>
            Full Stack MERN Developer • UI/UX Designer • DevOps Learner
          </p>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/M4GeeZ"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
          </a>

          <a
            href="https://linkedin.com/in/mughees-rehman-4600753bb"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin />
          </a>

          <a href="#home">
            <FiArrowUpRight />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Mughees Ur Rehman. All rights reserved.</span>

        <a href="#home">Back to Top ↑</a>
      </div>
    </footer>
  );
}