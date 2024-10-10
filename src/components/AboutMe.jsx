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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque totam
        soluta molestias placeat ad commodi eveniet, nisi doloribus cum. Eum
        possimus rerum nulla ipsa accusantium laboriosam tempore aliquam vero,
        cumque exercitationem! Maxime adipisci necessitatibus tenetur? Quod
        officiis quos, facilis at esse ut eos libero impedit blanditiis iste
        reprehenderit quas placeat!
      </div>
    </div>
  );
}

export default AboutMe;
