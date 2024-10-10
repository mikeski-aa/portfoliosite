import profilePic from "../assets/placeholderprof.jpg";
import "../styles/aboutme.css";

function AboutMe() {
  return (
    <div className="aboutMeComponent">
      <img src={profilePic} className="profilePicImg"></img>
      <div className="aboutMeTitle">
        <h2>About me</h2>
      </div>
      <div className="aboutMeContent">
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
