import { useContext, createContext, useRef, useState } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";
import MySkills from "./components/MySkills";
import ContactMe from "./components/ContactMe";
import reactIcon from "../src/assets/icons/react.svg";
import methodIcon from "../src/assets/icons/symbol-method.svg";
import VertBar from "./components/VertBar";
import NavBar from "./components/NavBar";

export const GlobalContext = createContext();

// cleanup and get rid of all old svg imports not done as react components

function App() {
  const [showAbout, setShowAbout] = useState(true);
  const [currentPage, setCurrentPage] = useState("About_me.jsx");
  const [cPage, setCpage] = useState("About");
  const [activePage, setActivePage] = useState(0);
  const contactRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);

  const [navItems, setNavItems] = useState([
    {
      name: "About_me.jsx",
      active: true,
      shortname: "About_me",
      trueIndex: 0,
      refLink: aboutRef,
    },
    {
      name: "My_projects.jsx",
      active: false,
      shortname: "My_projects",
      trueIndex: 1,
      refLink: projectsRef,
    },
    {
      name: "My_skills.jsx",
      active: false,
      shortname: "My_skills",
      trueIndex: 2,
      refLink: skillsRef,
    },
    {
      name: "Contact_me.jsx",
      active: false,
      shortname: "Contact_me",
      trueIndex: 3,
      refLink: contactRef,
    },
  ]);

  // smooth scrolling for each element

  const smoothScroll = (inputRef) => {
    inputRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavClick = (e) => {
    const copyItems = [...navItems];
    for (let x = 0; x < copyItems.length; x++) {
      if (copyItems[x].name === e.target.innerText) {
        copyItems[x].active = true;
        setCurrentPage(copyItems[x].name);
        setCpage(copyItems[x].shortname);
        setActivePage(copyItems[x].trueIndex);
        smoothScroll(copyItems[x].refLink);
      } else {
        copyItems[x].active = false;
      }
    }
    setNavItems(copyItems);
  };

  // handle setting index data when tab is beggining to be dragged
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("index", index);
  };

  // handle drop - set new index, splice array replacing item positions.
  // set new state to update the layout
  const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    const sourceIndex = parseInt(e.dataTransfer.getData("index"));
    const newItems = [...navItems];
    newItems.splice(targetIndex, 0, newItems.splice(sourceIndex, 1)[0]);
    setNavItems(newItems);
  };

  // disable default behaviour, otherwise drag won't work
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="page">
      <div className="pageTest">
        <VertBar />
        <div className="mainTest">
          <div className="headtest">
            <NavBar
              handleNavClick={(e) => handleNavClick(e)}
              handleDragOver={(e) => handleDragOver(e)}
              handleDrop={(e) => handleDrop(e, index)}
              handleDragStart={(e) => handleDragStart(e, index)}
              currentPage={currentPage}
              cPage={cPage}
              navItems={navItems}
            />
          </div>
          <div className="mainCont">
            <div
              className={
                activePage === 0 ? "sectionDiv true" : "sectionDiv false"
              }
              ref={aboutRef}
            >
              <AboutMe showAbout={showAbout} setShowAbout={setShowAbout} />
            </div>
            <div
              className={
                activePage === 1 ? "sectionDiv true" : "sectionDiv false"
              }
              ref={projectsRef}
            >
              <MyProjects />
            </div>
            <div
              className={
                activePage === 2 ? "sectionDiv true" : "sectionDiv false"
              }
              ref={skillsRef}
            >
              <MySkills />
            </div>
            <div
              className={
                activePage === 3 ? "sectionDiv true" : "sectionDiv false"
              }
              ref={contactRef}
            >
              <ContactMe />
            </div>
            <button className="backToTop">Back to top</button>
          </div>
        </div>
      </div>
      {/* <div className="headerContainer">
        <VertBar />
        <div className="header">
          <div className="buttonContainer">
            {navItems.map((item, index) => (
              <button
                key={index}
                className={`navBtn ${item.active}`}
                draggable
                onClick={(e) => handleNavClick(e)}
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, index)}
              >
                <img src={reactIcon} className="reactIconNav"></img>
                {item.name}
              </button>
            ))}
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
      </div> */}

      {/* <div className="mainCont">
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
      </div> */}
    </div>
  );
}

export default App;
