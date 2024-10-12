import { useEffect, useRef, useState } from "react";
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
  const [activePage, setActivePage] = useState(0);
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

  const handleTestClick = (e) => {
    const copyItems = [...navItems];
    for (let x = 0; x < copyItems.length; x++) {
      if (copyItems[x].name === e.target.innerText) {
        copyItems[x].active = true;
        setCurrentPage(copyItems[x].name);
        setCpage(copyItems[x].shortname);
        setActivePage(copyItems[x].trueIndex);
      } else {
        copyItems[x].active = false;
      }
    }
    setNavItems(copyItems);
  };

  const [navItems, setNavItems] = useState([
    { name: "About_Me.jsx", active: true, shortname: "About_me", trueIndex: 0 },
    {
      name: "My_projects.jsx",
      active: false,
      shortname: "My_projects",
      trueIndex: 1,
    },
    {
      name: "My_skills.jsx",
      active: false,
      shortname: "My_skills",
      trueIndex: 2,
    },
    {
      name: "Contact_me.jsx",
      active: false,
      shortname: "Contact_me",
      trueIndex: 3,
    },
  ]);

  const handleDragStart = (e, index) => {
    // e.preventDefault();
    e.dataTransfer.setData("index", index);
  };

  const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    const sourceIndex = parseInt(e.dataTransfer.getData("index"));
    const newItems = [...navItems];
    newItems.splice(targetIndex, 0, newItems.splice(sourceIndex, 1)[0]);
    setNavItems(newItems);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="header">
        <div className="buttonContainer">
          {navItems.map((item, index) => (
            <button
              key={index}
              className={`navBtn ${item.active}`}
              draggable
              onClick={(e) => handleTestClick(e)}
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
            >
              <img src={reactIcon} className="reactIconNav"></img>
              {item.name}
            </button>
          ))}
          {/* <button
            className={activePage === 0 ? "navBtn true" : "navBtn"}
            onClick={handleAboutClick}
          >
            <img src={reactIcon} className="reactIconNav"></img>About_me.jsx
          </button>
          <button
            className={activePage === 1 ? "navBtn true" : "navBtn"}
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
          </button> */}
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
        {/* <div className="dragContTest">
          {navItems.map((item, index) => (
            <button
              key={index}
              className={`navBtn ${item.active}`}
              draggable
              onClick={(e) => handleTestClick(e)}
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
            >
              <img src={reactIcon} className="reactIconNav"></img>
              {item.name}
            </button>
          ))}
        </div> */}
        <div
          className={activePage === 0 ? "sectionDiv true" : "sectionDiv false"}
          ref={aboutRef}
        >
          <AboutMe showAbout={showAbout} setShowAbout={setShowAbout} />
        </div>
        <div
          className={activePage === 1 ? "sectionDiv true" : "sectionDiv false"}
          ref={projectsRef}
        >
          <MyProjects />
        </div>
        <div
          className={activePage === 2 ? "sectionDiv true" : "sectionDiv false"}
          ref={skillsRef}
        >
          <MySkills />
        </div>
        <div
          className={activePage === 3 ? "sectionDiv true" : "sectionDiv false"}
          ref={contactRef}
        >
          <ContactMe />
        </div>
        <button className="backToTop">Back to top</button>
      </div>
    </>
  );
}

export default App;
