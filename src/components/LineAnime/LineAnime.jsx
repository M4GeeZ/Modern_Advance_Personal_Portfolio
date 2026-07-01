import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillGroups } from "../../data/skills";
import "./LineAnime.css";
import { FiArrowUpRight } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export default function LineAnime() {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const path = pathRef.current;
      const length = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      gsap.set(".svg-step", {
        opacity: 0.22,
        scale: 1,
        transformOrigin: "center center",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=3200",
          scrub: 1.2,
          pin: true,
        },
      });

      tl.to(path, {
        strokeDashoffset: 0,
        duration: 4,
        ease: "none",
      });

      tl.to(".step-1", { opacity: 1, duration: 0.3 }, 0.1);
      tl.to(".step-1 text", { scale: 1.08, duration: 0.3, transformOrigin: "center center" }, 0.1);

      tl.to(".step-2", { opacity: 1, duration: 0.3 }, 1.15);
      tl.to(".step-2 text", { scale: 1.08, duration: 0.3, transformOrigin: "center center" }, 1.15);

      tl.to(".step-3", { opacity: 1, duration: 0.3 }, 2.25);
      tl.to(".step-3 text", { scale: 1.04, duration: 0.3, transformOrigin: "center center" }, 2.25);

      tl.to(".step-4", { opacity: 1, duration: 0.3 }, 3.1);
      tl.to(".step-4 text", { scale: 1.04, duration: 0.3, transformOrigin: "center center" }, 3.1);

      tl.to(".process-screen", {
        opacity: 0,
        y: -80,
        scale: 0.92,
        filter: "blur(10px)",
        duration: 1,
      });

      tl.fromTo(
        ".skills-screen",
        { opacity: 0, y: 120, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2 },
        "<0.3"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="process-section" ref={sectionRef}>
      <div className="process-screen">
        <svg className="path-svg" viewBox="0 0 430 720" fill="none">
          <path
            ref={pathRef}
            d="
              M 200 105
              C 215 165, 115 160, 105 255
              C 95 335, 315 345, 320 440
              C 325 530, 215 540, 215 620
              L 215 700
            "
            stroke="#5ca8ff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          <g className="svg-step step-1">
            <circle className="step-dot" />
            <text x="215" y="90" textAnchor="middle">ANALYZE</text>
            <circle cx="200" cy="105" r="5" />
          </g>

          <g className="svg-step step-2">
            <text x="20" y="262" textAnchor="middle">DESIGN</text>
            <circle cx="105" cy="255" r="5" />
          </g>

          <g className="svg-step step-3">
            <text x="400" y="450" textAnchor="middle">BUILD</text>
            <circle cx="320" cy="440" r="5" />
          </g>

          <g className="svg-step step-4">
            <text x="130" y="598" textAnchor="middle">DELIVER</text>
            <circle cx="220" cy="590" r="5" />
          </g>
        </svg>
        
      </div>

      <div className="skills-screen">
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
                <button type="button" className="skill-row-btn">
                  <span>{g.title}</span>
                  <div className="skill-action">
  <small>0{i + 1}</small>

  <div className="arrow-circle">
    <FiArrowUpRight className="skill-arrow"/>
  </div>
</div>
                </button>

                <div className="skill-marquee">
                  <div className="skill-track">
                    {[...g.items, ...g.items, ...g.items].map((it, k) => {
                      const Icon = it.icon;

                      return (
                        <b key={k}>
                          <Icon />
                          <span>{it.name}</span>
                        </b>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}