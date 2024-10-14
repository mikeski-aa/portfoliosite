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
import AllTabsClosed from "./components/AllTabsClosed";
import { disableAllPages, enablAllPages } from "./utils/helperStateUpdates";

export const GlobalContext = createContext();

// TO DO: Add option to close tabs and stop rendering those tabs
// on clicking bonus, should open a new page.
// users should be able to switch between bonus page and regular pages.. This won't be true to VScode behaviour but it is a cutesy feature
// add an INTERACTIBLE terminal on the bottom of the page!
// style for mobile as best as possible
// bonus page needs to be rewritten in terms of activation

// mobile styling needs to be figured out
// probably need different images to load for mobile
// warn users that to get the full experience they should use desktop

function App() {
  const [currentPage, setCurrentPage] = useState("About_me.jsx");
  const [cPage, setCpage] = useState("About");
  const [activePage, setActivePage] = useState(0);
  const [sidebarStat, setSidebarStat] = useState(false);
  const contactRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);
  const [bonusPage, setBonusPage] = useState(false);
  const [navItems, setNavItems] = useState([
    {
      name: "About_me.jsx",
      active: true,
      shortname: "About_me",
      trueIndex: 0,
      refLink: aboutRef,
      visible: true,
      disabled: false,
    },
    {
      name: "My_projects.jsx",
      active: false,
      shortname: "My_projects",
      trueIndex: 1,
      refLink: projectsRef,
      visible: true,
      disabled: false,
    },
    {
      name: "My_skills.jsx",
      active: false,
      shortname: "My_skills",
      trueIndex: 2,
      refLink: skillsRef,
      visible: true,
      disabled: false,
    },
    {
      name: "Contact_me.jsx",
      active: false,
      shortname: "Contact_me",
      trueIndex: 3,
      refLink: contactRef,
      visible: true,
      disabled: false,
    },
  ]);
  // this is a temporary fix, which might become a pernament fix if I don't figure out a better solution
  // I need a "default" directory of pages, however, with how refs are implemented, I cannot store this in an outside file
  // this state is required in order to restore nav buttons and other items when they become closed
  const [defaultPages, setDefaultPages] = useState([
    {
      name: "About_me.jsx",
      active: true,
      shortname: "About_me",
      trueIndex: 0,
      refLink: aboutRef,
      visible: true,
      disabled: false,
    },
    {
      name: "My_projects.jsx",
      active: false,
      shortname: "My_projects",
      trueIndex: 1,
      refLink: projectsRef,
      visible: true,
      disabled: false,
    },
    {
      name: "My_skills.jsx",
      active: false,
      shortname: "My_skills",
      trueIndex: 2,
      refLink: skillsRef,
      visible: true,
      disabled: false,
    },
    {
      name: "Contact_me.jsx",
      active: false,
      shortname: "Contact_me",
      trueIndex: 3,
      refLink: contactRef,
      visible: true,
      disabled: false,
    },
    {
      name: "bonusPage.js",
      active: false,
      shortname: "bonusPage",
      trueIndex: 4,
      visible: false,
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
  // this function living here is weird af.
  const handleNavClick = (e) => {
    // handle "opening" the bonus page
    // disable all other pages
    if (e.target.innerText === "bonusPage.js") {
      // exit this early in case double clicked to prevent unneeded functions running
      if (bonusPage) {
        return;
      }
      console.log("XD");
      setBonusPage(true);
      disableAllPages(defaultPages, setDefaultPages);
      helperClickStateUpdate(
        navItems,
        setNavItems,
        e.target.innerText,
        setCurrentPage,
        setCpage
      );
      return;
    }

    // there is an issue with scrolling when clicking on other elements.
    // look into it
    if (bonusPage && e.target.innerText != "bonusPage.js") {
      setBonusPage(false);
      enablAllPages(defaultPages, setDefaultPages, navItems);
      return helperClickStateUpdate(
        navItems,
        setNavItems,
        e.target.innerText,
        setCurrentPage,
        setCpage
      );
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
          handleNavClick,
          defaultPages,
          setDefaultPages,
          setBonusPage,
          bonusPage,
        }}
      >
        <div className="pageTest">
          <VertBar />
          <div
            className={
              navItems.length < 1
                ? `mainTest ${sidebarStat} hiddenheight`
                : `mainTest ${sidebarStat}`
            }
          >
            <div
              className={navItems.length < 1 ? "headtest hidden" : "headtest"}
            >
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
                  defaultPages[0].disabled ? "sectionDiv hidden" : "sectionDiv"
                }
                ref={aboutRef}
              >
                <AboutMe />
              </div>
              <div
                className={
                  defaultPages[1].disabled ? "sectionDiv hidden" : "sectionDiv"
                }
                ref={projectsRef}
              >
                <MyProjects />
              </div>
              <div
                className={
                  defaultPages[2].disabled ? "sectionDiv hidden" : "sectionDiv"
                }
                ref={skillsRef}
              >
                <MySkills />
              </div>
              <div
                className={
                  defaultPages[3].disabled
                    ? "sectionDiv hidden"
                    : "sectionDiv last"
                }
                ref={contactRef}
              >
                <ContactMe />
              </div>

              {navItems.length < 1 ? <AllTabsClosed /> : null}
              {bonusPage ? <BonusPage /> : null}

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
