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
      <div className="aboutMeMainContent">
        <div className="aboutSection">
          <div className="aboutText">
            <h2>About_me</h2>
            I'm a passionate and curious self-taught developer
          </div>
          {/* <div className="aboutPic">
            <img src={profilePic} className="profilePicImg"></img>
          </div> */}
        </div>

        {/* <GitHubCalendar username="mikeski-aa" /> */}
      </div>

      <ExportLine text="About_me" />
    </div>
  );
}

export default AboutMe;
