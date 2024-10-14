import { useContext, createContext, useRef, useState, useEffect } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";
import MySkills from "./components/MySkills";
import ContactMe from "./components/ContactMe";
import VertBar from "./components/VertBar";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useInView } from "./hooks/useInView";
import {
  helperScrollStateUpdate,
  helperClickStateUpdate,
} from "./utils/helperStateUpdates";
import BonusPage from "./components/BonusPage";
import TerminalBox from "./components/TerminalBox";

export const GlobalContext = createContext();

// TO DO: Add option to close tabs and stop rendering those tabs
// on clicking bonus, should open a new page.
// users should be able to switch between bonus page and regular pages.. This won't be true to VScode behaviour but it is a cutesy feature
// add an INTERACTIBLE terminal on the bottom of the page!
// style for mobile as best as possible

// bonus page needs to be rewritten in terms of activation

function App() {
  const [showAbout, setShowAbout] = useState(true);
  const [currentPage, setCurrentPage] = useState("About_me.jsx");
  const [cPage, setCpage] = useState("About");
  const [activePage, setActivePage] = useState(0);
  const [sidebarStat, setSidebarStat] = useState(false);
  const contactRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);
  const [bonusPage, setBonusPage] = useState(false);
  const [bonusPageLarge, setBonusPageLarge] = useState(false);
  const [navItems, setNavItems] = useState([
    {
      name: "About_me.jsx",
      active: true,
      shortname: "About_me",
      trueIndex: 0,
      refLink: aboutRef,
      visible: true,
    },
    {
      name: "My_projects.jsx",
      active: false,
      shortname: "My_projects",
      trueIndex: 1,
      refLink: projectsRef,
      visible: true,
    },
    {
      name: "My_skills.jsx",
      active: false,
      shortname: "My_skills",
      trueIndex: 2,
      refLink: skillsRef,
      visible: true,
    },
    {
      name: "Contact_me.jsx",
      active: false,
      shortname: "Contact_me",
      trueIndex: 3,
      refLink: contactRef,
      visible: true,
    },
  ]);
  const [disabledPages, setDisabledPages] = useState([
    {
      name: "About_me",
      disabled: false,
    },
    {
      name: "My_projects",
      disabled: false,
    },
    {
      name: "My_skills",
      disabled: false,
    },
    {
      name: "Contact_me",
      disabled: false,
    },
    {
      name: "Bonus",
      disabled: true,
    },
  ]);

  // using custom hook to check whether an area is in view and adjust text accordingly
  const aboutVisible = useInView(aboutRef, "0px");
  const projectsVisible = useInView(projectsRef, "0px");
  const skillsVisible = useInView(skillsRef, "0px");
  const contactVisible = useInView(contactRef, "0px");

  // update active based on scroll position
  useEffect(() => {
    if (aboutVisible) {
      setActivePage("zero");
      setCurrentPage("About_me.jsx");
      setCpage("About");
      helperScrollStateUpdate(navItems, setNavItems, "About_me.jsx");
    } else if (projectsVisible) {
      setCurrentPage("My_projects.jsx");
      setCpage("My_projects");
      setActivePage("one");
      helperScrollStateUpdate(navItems, setNavItems, "My_projects.jsx");
    } else if (skillsVisible) {
      setCurrentPage("My_skills.jsx");
      setCpage("My_skills");
      setActivePage("two");
      helperScrollStateUpdate(navItems, setNavItems, "My_skills.jsx");
    } else if (contactVisible) {
      setCurrentPage("Contact_me.jsx");
      setCpage("Contact_me");
      setActivePage("three");
      helperScrollStateUpdate(navItems, setNavItems, "Contact_me.jsx");
    }
  }, [aboutVisible, projectsVisible, skillsVisible, contactVisible]);

  // handle nav click
  // not sure if this should live here or in nav bar...
  // might need to refactor
  const handleNavClick = (e) => {
    if (e.target.innerText === "bonusPage.js") {
      return setBonusPageLarge(true);
    }

    helperClickStateUpdate(
      navItems,
      setNavItems,
      e.target.innerText,
      setCurrentPage,
      setCpage
    );
  };

  return (
    <div className="page">
      <GlobalContext.Provider
        value={{
          navItems,
          setNavItems,
          sidebarStat,
          setSidebarStat,
          setCurrentPage,
          setCpage,
          activePage,
          bonusPage,
          setBonusPage,
          handleNavClick,
          disabledPages,
          setDisabledPages,
        }}
      >
        <div className="pageTest">
          <VertBar />
          <div className={`mainTest ${sidebarStat}`}>
            <div className="headtest">
              <NavBar
                handleNavClick={(e) => handleNavClick(e)}
                currentPage={currentPage}
                cPage={cPage}
                navItems={navItems}
                setNavItems={setNavItems}
              />
            </div>
            <div className={`mainCont ${sidebarStat}`}>
              <div
                className={
                  disabledPages[0].disabled ? "sectionDiv hidden" : "sectionDiv"
                }
                ref={aboutRef}
              >
                <AboutMe />
              </div>
              <div
                className={
                  disabledPages[1].disabled ? "sectionDiv hidden" : "sectionDiv"
                }
                ref={projectsRef}
              >
                <MyProjects />
              </div>
              <div
                className={
                  disabledPages[2].disabled ? "sectionDiv hidden" : "sectionDiv"
                }
                ref={skillsRef}
              >
                <MySkills />
              </div>
              <div
                className={
                  disabledPages[3].disabled ? "sectionDiv hidden" : "sectionDiv"
                }
                ref={contactRef}
              >
                <ContactMe />
              </div>
              <div
                className={
                  disabledPages[4].disabled ? "sectionDiv hidden" : "sectionDiv"
                }
              >
                <BonusPage bonusShow={bonusPageLarge} />
              </div>

              <div className="blankSpacer"></div>
              <TerminalBox />
            </div>
          </div>
          <Footer />
        </div>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
