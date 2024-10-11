import { useRef, useState } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";
import MySkills from "./components/MySkills";
import ContactMe from "./components/ContactMe";
import reactIcon from "../src/assets/icons/react.svg";
import methodIcon from "../src/assets/icons/symbol-method.svg";

function App() {
  const [showAbout, setShowAbout] = useState(true);
  const [currentPage, setCurrentPage] = useState("About_me.jsx");
  const [cPage, setCpage] = useState("About");
  const [active, setActive] = useState(0);

  const contactRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);

  // smooth scrolling for each element

  // const scrollProjects = () => {
  //   projectsRef.current.scrollIntoView({ behavior: "smooth" });
  // };

  // const scrollContact = () => {
  //   contactRef.current.scrollIntoView({ behavior: "smooth" });
  // };

  // const scrollAbout = () => {
  //   aboutRef.current.scrollIntoView({ behavior: "smooth" });
  // };

  // const scrollSkills = () => {
  //   skillsRef.current.scrollIntoView({ behavior: "smooth" });
  // };

  const handleAboutClick = () => {};
  const handleProjectsClick = () => {};
  const handleSkillsClick = () => {};
  const handleContactClick = () => {};

  return (
    <>
      <div className="header">
        <div className="buttonContainer">
          <button className={"navBtn"} onClick={handleAboutClick}>
            <img src={reactIcon} className="reactIconNav"></img>About_me.jsx
          </button>
          <button className="navBtn" onClick={handleProjectsClick}>
            <img src={reactIcon} className="reactIconNav"></img>My_projects.jsx
          </button>
          <button className="navBtn" onClick={handleSkillsClick}>
            <img src={reactIcon} className="reactIconNav"></img> My_skills.jsx
          </button>
          <button className="navBtn" onClick={handleContactClick}>
            <img src={reactIcon} className="reactIconNav"></img>Contact.jsx
          </button>
        </div>

        <div className="appLocation">
          <div className="fileLoc">{"src > "}</div>
          <div className="fileLoc">
            <img src={reactIcon} className="smallIcon" /> {currentPage + " >"}
          </div>
          <div className="fileLoc">
            <img src={methodIcon} className="smallIcon"></img> {cPage}
          </div>
        </div>
      </div>
      {/* <div className="mainCont">
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
      </div> */}
    </>
  );
}

export default App;
