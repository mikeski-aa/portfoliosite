import "../../styles/new_main_design/newpagedesign.css";
import { GlobalContext } from "../../App";
import { useContext } from "react";
import headshot from "../../assets/gif/IMG_20241013_1452212.png";

function NewMainPageDesign() {
  // writing out the basic layout before breaking it down into own compoenents and styling individually
  return (
    <div className="newDesignDiv">
      <div className="newSection About">
        <div className="newHeadshotDiv">
          <img src={headshot} className="headshotImg"></img>
        </div>
        <div className="newAbout content div">
          <div className="newAboutHeading">Michal Nowak</div>
          <div className="newAboutSubHeading">
            Fullstack developer based in Berlin
          </div>
          <div className="newAboutText">
            Hey there! I'm a self-taught fullstack developer who's always been
            drawn to the creative and technical aspects of building websites. I
            love the challenge of turning ideas into reality, and I'm constantly
            learning new things to stay on top of the latest trends in web
            development. Let's create something amazing together!
          </div>
        </div>
      </div>
      <div className="newSection Skills"></div>
      <div className="newSection Projects"></div>
      <div className="newSection Contact"></div>
    </div>
  );
}

export default NewMainPageDesign;
