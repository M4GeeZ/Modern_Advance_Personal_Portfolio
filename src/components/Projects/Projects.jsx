import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../../data/projects";
import "./Projects.css";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".project-card");

      cards.forEach((card, i) => {
        gsap.set(card, {
          yPercent: i * 120,
          z: 0,
          scale: 1,
          rotationX: 0,
          opacity: 1,
          filter: "blur(0px)",
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${projects.length * 1300}`,
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      for (let i = 1; i < cards.length; i++) {
        tl.to(
          cards[i],
          {
            yPercent: i * 3,
            duration: 1.2,
            ease: "power3.out",
          },
          ">"
        );

        tl.to(
          cards[i - 1],
          {
            y: -120 + i * 18,
            z: -420 + i * 45,
            scale: 0.78 + i * 0.035,
            rotationX: 14 - i,
            opacity: 0.62 + i * 0.055,
            filter: "blur(1px)",
            duration: 1.2,
            ease: "power3.out",
          },
          "<"
        );
      }

      tl.to(cards, {
        y: (i) => -240 + i * 45,
        z: (i) => -650 + i * 120,
        scale: (i) => 0.58 + i * 0.08,
        rotationX: (i) => 18 - i * 2,
        opacity: (i) => 0.25 + i * 0.13,
        duration: 1,
        ease: "power3.inOut",
      });

      tl.to(".project-cards-stack", {
        y: -120,
        z: -900,
        scale: 0.55,
        rotationX: 18,
        opacity: 0,
        filter: "blur(8px)",
        duration: 1.4,
        ease: "power3.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="projects reveal-section" id="projects">
      <div className="marquee">
        <div className="marquee-track">
          {[...Array(20)].map((_, i) => (
            <span key={i}>SELECTED WORKS — </span>
          ))}
        </div>
      </div>

      <div className="projects-stack-section" ref={sectionRef}>
        <div className="project-cards-stack">
          {projects.map((p) => (
            <article className="project-card glass" key={p.id}>
              <div className="project-top">
                <div className="project-id">
                  <strong>{p.id}</strong>
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.stack}</p>
                  </div>
                </div>

                <a className="link" href={p.live} target="_blank" rel="noreferrer">
                  View Project
                </a>
              </div>

              <div className="project-body">
                <div className="mockup">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="project-image"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <p>{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}