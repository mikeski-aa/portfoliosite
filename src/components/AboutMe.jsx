import profilePic from "../assets/placeholderprof.jpg";
import egAsset from "../assets/example.jpg";
import "../styles/aboutme.css";
import GitHubCalendar from "react-github-calendar";
import ExportLine from "./ExportLine";
import CodeComponent from "./CodeComponent";

function AboutMe(props) {
  const handleAboutShow = () => {
    if (props.showAbout === false) {
      props.setShowAbout(true);
    } else {
      props.setShowAbout(false);
    }
  };

  return (
    <div className="aboutMeComponent">
      <CodeComponent
        firstImport="profilepic"
        firstImportLocation={`"../assets/profile.jpg"`}
        styleImportLink={`"../styles/aboutme.css"`}
        functionName="About_me"
      />

      <div className="aboutMeTitle">
        <h2>About_me</h2>
      </div>
      <div className="aboutMeContainer">
        <div className="aboutMeText">
          I'm a passionate web developer looking for my next challenge
        </div>
        {/* <div className="boxybox"></div> */}

        {/* <img src={profilePic} className="profImg"></img> */}
      </div>

      {/* <GitHubCalendar username="mikeski-aa" /> */}

      <ExportLine text="About_me" />
    </div>
  );
}

export default AboutMe;
