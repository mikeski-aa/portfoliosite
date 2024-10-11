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
      <h2 className="profileName">Xinyi Ru</h2>
      <img src={profilePic} className="profilePicImg"></img>
      <div className="aboutMeTitle">
        <h2 onClick={handleAboutShow}>About me</h2>
      </div>
      <div className={`aboutMeContent ${props.showAbout}`}>
        I'm a self-taught aspiring web developer. I begun my development journey
        in February 2024 taking on "The Odin Project", following the curriculum
        from basic HTML and CSS, all the way through to learning React and Node.
      </div>
    </div>
  );
}

export default AboutMe;
