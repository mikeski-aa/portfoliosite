import { useState } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";
import MySkills from "./components/MySkills";
import ContactMe from "./components/ContactMe";

function App() {
  const [showAbout, setShowAbout] = useState(true);

  return (
    <>
      <div className="header">
        <button className="navBtn">About me</button>
        <button className="navBtn">My projects</button>
        <button className="navBtn">My skills</button>
        <button className="navBtn">Contact</button>
      </div>
      <div className="mainCont">
        <div className="aboutMeDivContainer">
          <AboutMe showAbout={showAbout} setShowAbout={setShowAbout} />
        </div>
        <div className="myProjectsDiv">
          <MyProjects />
        </div>
        <div className="mySkills">
          <MySkills />
        </div>
        <div className="contactMeDiv">
          <ContactMe />
        </div>
      </div>
    </>
  );
}

export default App;
