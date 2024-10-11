import { useRef, useState } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";
import MySkills from "./components/MySkills";
import ContactMe from "./components/ContactMe";

function App() {
  const [showAbout, setShowAbout] = useState(true);
  const contactRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);

  // smooth scrolling for each element

  const scrollProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollSkills = () => {
    skillsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="header">
        <button className="navBtn" onClick={scrollAbout}>
          About me
        </button>
        <button className="navBtn" onClick={scrollProjects}>
          My projects
        </button>
        <button className="navBtn" onClick={scrollSkills}>
          My skills
        </button>
        <button className="navBtn" onClick={scrollContact}>
          Contact
        </button>
      </div>
      <div className="mainCont">
        <div className="aboutMeDivContainer" ref={aboutRef}>
          <AboutMe showAbout={showAbout} setShowAbout={setShowAbout} />
        </div>
        <div className="myProjectsDiv" ref={projectsRef}>
          <MyProjects />
        </div>
        <div className="mySkills" ref={skillsRef}>
          <MySkills />
        </div>
        <div className="contactMeDiv" ref={contactRef}>
          <ContactMe />
        </div>
      </div>
    </>
  );
}

export default App;
