import { useLayoutEffect, useRef, useState } from "react";
import { FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Contact.css";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const form = useRef();
  const sectionRef = useRef(null);
  const boxRef = useRef(null);

  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=2600",
        scrub: 1.2,
        pin: true,
      },
    });

    const words = gsap.utils.toArray(".process-word");

    words.forEach((word) => {
      tl.fromTo(
        word,
        { opacity: 0, y: 90, scale: 0.92 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.45,
          ease: "power3.out",
        }
      )
        .to(word, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.35,
        })
        .to(word, {
          opacity: 0,
          y: -90,
          scale: 0.92,
          duration: 0.45,
          ease: "power3.in",
        });
    });
tl.set(boxRef.current, { opacity: 1 });
    tl.fromTo(
      boxRef.current,
      {
        opacity: 0,
        width: "260px",
        height: "260px",
        borderRadius: "50%",
        scale: 0.75,
      },
      {
        width: "92vw",
        height: "82vh",
        borderRadius: "42px",
        scale: 1,
        duration: 1.4,
        ease: "power3.inOut",
      }
    ).fromTo(
      ".contact-inner",
      { opacity: 0, y: 60, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8 },
      "-=0.35"
    );
  }, sectionRef);

  return () => ctx.revert();
}, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setSent(false);
    setError(false);

    emailjs
      .sendForm("service_2mfwd2r", "template_2usrgej", form.current, {
        publicKey: "_XYlcRB8yH7K6ZneB",
      })
      .then(() => {
        setSent(true);
        setSending(false);
        form.current.reset();
      })
      .catch(() => {
        setError(true);
        setSending(false);
      });
  };

  return (
    <section className="contact-scroll" id="contact" ref={sectionRef}>
      <div className="process-line">
        <span className="process-word">ANALYZE</span>
        <span className="process-word">DESIGN</span>
        <span className="process-word">BUILD</span>
        <span className="process-word">DELIVER</span>
      </div>

      <div className="contact-box" ref={boxRef}>
        <div className="contact-inner">
          <div className="contact-left">
            <p className="eyebrow">Contact</p>
            <h2 className="contact-title">Let’s Connect</h2>

            <p className="contact-desc">
              Ready to collaborate on modern, scalable, and user-focused digital
              experiences — let’s build something impactful together.
            </p>

            <div className="contact-info">
              <div>
                <small>Email</small>
                <a href="mailto:mughees1275@gmail.com">mughees1275@gmail.com</a>
              </div>

              <div>
                <small>LinkedIn</small>
                <a href="https://www.linkedin.com/in/mughees-rehman-4600753bb/" target="_blank" rel="noreferrer">
                  linkedin.com/in/mughees-rehman
                </a>
              </div>

              <div>
                <small>GitHub</small>
                <a href="https://github.com/M4GeeZ" target="_blank" rel="noreferrer">
                  github.com/M4GeeZ
                </a>
              </div>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-row">
              <input type="text" name="first_name" placeholder="First Name" required />
              <input type="text" name="last_name" placeholder="Last Name" required />
            </div>

            <input type="email" name="email" placeholder="Email Address" required />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea name="message" placeholder="Message" required></textarea>

            <button type="submit" disabled={sending}>
              {sending ? "Sending..." : "Send Message"} <FiSend />
            </button>

            {sent && <p className="success-msg">Message sent successfully!</p>}
            {error && <p className="error-msg">Message failed. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}