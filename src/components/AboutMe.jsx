import profilePic from "../assets/placeholderprof.jpg";
import "../styles/aboutme.css";

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
      <div className="aboutMeMainContent"></div>
      {/* <h2 className="profileName">Mike Ru</h2>
      <img src={profilePic} className="profilePicImg"></img>
      <div className="aboutMeTitle">
        <h2>About me</h2>
      </div>
      <div className={`aboutMeContent`}>
        I'm a self-taught aspiring web developer. I begun my development journey
        in February 2024 taking on "The Odin Project", following the curriculum
        from basic HTML and CSS, all the way through to learning React and Node.
      </div> */}
    </div>
  );
}

export default AboutMe;
