import profilePic from "../assets/placeholderprof.jpg";
import egAsset from "../assets/example.jpg";
import "../styles/aboutme.css";
import GitHubCalendar from "react-github-calendar";
import ExportLine from "./ExportLine";

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
      <div className="codeStyle">
        <div className="line">
          import <span className="fileStyle">profilepic</span> from{" "}
          <span className="linkStyle">"../assets/profile.jpg"</span>
        </div>
        <div className="line">
          import <span className="linkStyle">"../styles/aboutme.css"</span>
        </div>
        <br></br>
        <div className="line">
          <span className="fcnStyle">function</span>{" "}
          <span className="nameStyle">AboutMe</span>
          <span className="brackStyle">
            {"("}
            <span className="fileStyle">props</span>
            {") {"}
          </span>
        </div>
        <div>...</div>

        <div className="line">&nbsp;&nbsp;&nbsp;{`return (`}</div>
      </div>
      <div className="aboutMeMainContent">
        <div className="aboutSection">
          <div className="aboutText">
            <h2>About_me</h2>
            I'm a passionate and curious self-taught developer
          </div>
          <div className="aboutPic">
            <img src={profilePic} className="profilePicImg"></img>
          </div>
        </div>

        {/* <GitHubCalendar username="mikeski-aa" /> */}
      </div>

      <ExportLine text="About_me" />
    </div>
  );
}

export default AboutMe;
