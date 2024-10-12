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
  const [activeOne, setActiveOne] = useState(true);
  const [activeTwo, setActiveTwo] = useState(false);
  const [activeThree, setActiveThree] = useState(false);
  const [activeFour, setActiveFour] = useState(false);

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

  // reset states of active buttons depending on what has been selected
  const resetActive = (ignore) => {
    const tempArr = [setActiveOne, setActiveTwo, setActiveThree, setActiveFour];
    const filteredArr = tempArr.filter((myFunction, index) => index != ignore);

    filteredArr[0](false);
    filteredArr[1](false);
    filteredArr[2](false);
  };

  const handleAboutClick = () => {
    setActiveOne(true);
    resetActive(0);
    setCurrentPage("About_me.jsx");
    setCpage("About");
  };
  const handleProjectsClick = () => {
    setActiveTwo(true);
    resetActive(1);
    setCurrentPage("My_projects.jsx");
    setCpage("My_Projects");
  };
  const handleSkillsClick = () => {
    setActiveThree(true);
    resetActive(2);
    setCurrentPage("My_skills.jsx");
    setCpage("My_skills");
  };
  const handleContactClick = () => {
    setActiveFour(true);
    resetActive(3);
    setCurrentPage("Contact_me.jsx");
    setCpage("Contact_me");
  };

  const [items, setItems] = useState(["One", "Two"]);

  const handleDragStart = (e, index) => {
    // e.preventDefault();
    e.dataTransfer.setData("index", index);
  };

  const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    const sourceIndex = parseInt(e.dataTransfer.getData("index"));
    const newItems = [...items];

    newItems.splice(targetIndex, 0, newItems.splice(sourceIndex, 1)[0]);
    setItems(newItems);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="header">
        <div className="buttonContainer">
          <button className={`navBtn ${activeOne}`} onClick={handleAboutClick}>
            <img src={reactIcon} className="reactIconNav"></img>About_me.jsx
          </button>
          <button
            className={`navBtn ${activeTwo}`}
            onClick={handleProjectsClick}
          >
            <img src={reactIcon} className="reactIconNav"></img>My_projects.jsx
          </button>
          <button
            className={`navBtn ${activeThree}`}
            onClick={handleSkillsClick}
          >
            <img src={reactIcon} className="reactIconNav"></img> My_skills.jsx
          </button>
          <button
            className={`navBtn ${activeFour}`}
            onClick={handleContactClick}
          >
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
      <div className="mainCont">
        <div className="dragContTest">
          {items.map((item, index) => (
            <div
              key={index}
              className="dragItem"
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
            >
              {item}
            </div>
          ))}
        </div>
        {/* <div className={`sectionDiv ${activeOne}`} ref={aboutRef}>
          <AboutMe showAbout={showAbout} setShowAbout={setShowAbout} />
        </div>
        <div className={`sectionDiv ${activeTwo}`} ref={projectsRef}>
          <MyProjects />
        </div>
        <div className={`sectionDiv ${activeThree}`} ref={skillsRef}>
          <MySkills />
        </div>
        <div className={`sectionDiv ${activeFour}`} ref={contactRef}>
          <ContactMe />
        </div>
        <button className="backToTop">Back to top</button> */}
      </div>
    </>
  );
}

export default App;
