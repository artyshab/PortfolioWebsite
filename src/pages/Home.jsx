import { useState, useEffect, useRef } from "react";
import About from "../components/About";
import Experience from "../components/Experience";
import PersonalDetails from "../components/PersonalDetails";
import Projects from "../components/Projects";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
        }
      });
    }, options);

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (experienceRef.current) observer.observe(experienceRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container">
      <PersonalDetails activeSection={activeSection} />
      <div className="work">
        <section id="about" ref={aboutRef}>
          <About />
        </section>
        <section id="experience" ref={experienceRef}>
          <Experience />
        </section>
        <section id="projects" ref={projectsRef}>
          <Projects />
        </section>
      </div>
    </div>
  );
}
