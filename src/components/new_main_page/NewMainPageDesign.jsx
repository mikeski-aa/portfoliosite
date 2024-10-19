import "../../styles/new_main_design/newpagedesign.css";
import { GlobalContext } from "../../App";
import { useContext } from "react";
import headshot from "../../assets/gif/IMG_252521.png";
import "../../styles/new_main_design/newaboutstyle.css";
import "../../styles/new_main_design/newskills.css";
import "../../styles/new_main_design/newprojects.css";
import Typewriter from "typewriter-effect";
import skills from "../../utils/skillsData";
import NewSkillBox from "./NewSkillBox";
import NewProjects from "./NewProjects";
import projects from "../../utils/projectData";
import NewProjectCard from "./NewProjectCard";

function NewMainPageDesign() {
  // writing out the basic layout before breaking it down into own compoenents and styling individually
  return (
    <div className="newDesignDiv">
      <div className="newSection About">
        <div className="newHeadshotDiv">
          <img src={headshot} className="headshotImgNew"></img>
        </div>
        <div className="newAbout content div">
          <div className="newAboutHeading">Michal Nowak&nbsp;</div>
          <div className="newAboutSubHeading">
            Fullstack developer based in Berlin&nbsp;
          </div>
          <div className="newAboutText">
            <Typewriter
              options={{ delay: 0.2 }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "I'm a self-taught fullstack developer who's always been drawn to the creative and technical aspects of building websites. I love the challenge of turning ideas into reality, and I'm constantly learning new things to stay on top of the latest trends in web development."
                  )
                  .start();
              }}
            />
          </div>
        </div>
      </div>
      <div className="newSection Skills">
        {skills.map((item, index) => (
          <NewSkillBox key={index} name={item.name} />
        ))}
      </div>
      <div className="newSection Projects">
        {/* <NewProjects /> */}
        <div className="newProjectCardsContainer">
          {" "}
          {projects.map((item, index) => (
            <NewProjectCard
              key={index}
              heading={item.title}
              text={item.desc}
              isHosted={item.isHosted}
              projectLink={item.projectLink}
              smallPic={item.smallPic}
              skills={item.tech}
              type={item.type}
              feRepo={item.feRepo}
              beRepo={item.beRepo}
            />
          ))}
        </div>
      </div>
      <div className="newSection Contact"></div>
    </div>
  );
}

export default NewMainPageDesign;
