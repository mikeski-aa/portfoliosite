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
import EmailModal from "./components/EmailModal";
import NewMainPageDesign from "./components/new_main_page/NewMainPageDesign";
import NewAboutComp from "./components/new_main_page/NewAboutComponent";
import skills from "./utils/skillsData";
import NewSkillBox from "./components/new_main_page/NewSkillBox";
import NewProjectComp from "./components/new_main_page/NewProjectsComp";
import NewContactMe from "./components/new_main_page/NewContactMe";

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
  const [cPage, setCpage] = useState("About_me");
  const [activePage, setActivePage] = useState(0);
  const [sidebarStat, setSidebarStat] = useState(false);
  const contactRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);
  const [bonusPage, setBonusPage] = useState(false);
  const [emailModal, setEmailModal] = useState(false);
  const [dontRun, setDontRun] = useState(false);

  const hasPageBeenRendered = useRef(false);

  // this could be rewritten. we dont need long and short name. total redundancy
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
      active: false,
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
  // this is has caused me a lot of frustration when switching from bonus page to "normal" pages
  // hacky work around is to use setTimeout. It doesnt look too bad on local machine, might be awful when hosted.

  useEffect(() => {
    if (!dontRun) {
      if (aboutVisible) {
        setActivePage("zero");
        setCurrentPage("About_me.jsx");
        setCpage("About_me");
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
    }
  }, [aboutVisible, projectsVisible, skillsVisible, contactVisible]);

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
          defaultPages,
          setDefaultPages,
          setBonusPage,
          bonusPage,
          setActivePage,
          emailModal,
          setEmailModal,
          dontRun,
          setDontRun,
        }}
      >
        <EmailModal emailModal={emailModal} setEmailModal={setEmailModal} />
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
                currentPage={currentPage}
                cPage={cPage}
                navItems={navItems}
                setNavItems={setNavItems}
              />
            </div>
            <div className={`mainCont ${sidebarStat}`}>
              {/* <NewMainPageDesign /> */}
              <div
                className={
                  defaultPages[0].disabled ? "sectionDiv hidden" : "sectionDiv"
                }
                ref={aboutRef}
              >
                <NewAboutComp />
              </div>
              <div
                className={
                  defaultPages[1].disabled ? "sectionDiv hidden" : "sectionDiv"
                }
                ref={skillsRef}
              >
                <div className="scrollHolder">
                  {skills.map((item, index) => (
                    <NewSkillBox key={index} name={item.name} />
                  ))}
                </div>
              </div>
              <div
                className={
                  defaultPages[2].disabled ? "sectionDiv hidden" : "sectionDiv"
                }
                ref={projectsRef}
              >
                <NewProjectComp />
              </div>
              <div
                className={
                  defaultPages[3].disabled
                    ? "sectionDiv hidden"
                    : "sectionDiv last"
                }
                ref={contactRef}
              >
                <div className="newSection Contact">
                  <div className="newProjectsHeading">Contact</div>
                  <NewContactMe />
                </div>
              </div>
              {/* <div
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
              </div> */}

              {navItems.length < 1 ? <AllTabsClosed /> : null}
              {!defaultPages[4].disabled ? <BonusPage /> : null}

              <TerminalBox bonusPage={defaultPages[4].disabled} />
            </div>
          </div>
          <Footer />
        </div>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
