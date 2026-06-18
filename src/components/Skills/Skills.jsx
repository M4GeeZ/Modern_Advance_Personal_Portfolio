import { skillGroups } from "../../data/skills";
import "./Skills.css";
export default function Skills() {
  return (
    <section className="skills reveal-section" id="skills">
      <div className="skills-head">
        <p className="eyebrow">Technical stack</p>
        <h2 className="section-title">
          Skills <span>Menu</span>
        </h2>
      </div>
      <div className="skills-menu">
        {skillGroups.map((g, i) => (
          <div className="skill-row" key={g.title}>
            <a href="#contact">
              <span>{g.title}</span>
              <small>0{i + 1}</small>
            </a>
            <div className="skill-marquee">
              <div className="skill-track">
                {[...g.items, ...g.items, ...g.items].map((it, k) => (
                  <b key={k}>{it}</b>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
