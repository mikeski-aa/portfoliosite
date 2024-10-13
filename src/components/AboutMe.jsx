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
        rLine="351"
      />

      <div className="aboutMeTitle">
        <h2>About_me</h2>
      </div>
      <div className="aboutMeContainer">
        <div className="aboutMeText">
          <img src={profilePic} className="profImg"></img>
          <div className="upperTextContainer">
            <div className="nameHeader">
              <span className="line">Mike </span>&nbsp;Kowalski
            </div>
            <div className="titleText">
              Web developer based in{" "}
              <span className="line locationBold">Berlin</span>
            </div>
            <div className="aboutDesc">
              <span className="fcnStyle aboutBio">Hey there!</span> I'm a
              self-taught web developer who's always been drawn to the creative
              and technical aspects of building websites. I love the challenge
              of turning ideas into reality, and I'm constantly learning new
              things to stay on top of the latest trends in web development.{" "}
              <br></br>
              <br></br>Let's create something amazing together!
            </div>
          </div>
        </div>
      </div>

      {/* <GitHubCalendar username="mikeski-aa" /> */}

      <ExportLine text="About_me" top="391" mid="392" bot="393" />
    </div>
  );
}

export default AboutMe;
