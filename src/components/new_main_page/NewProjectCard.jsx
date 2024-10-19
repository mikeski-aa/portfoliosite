import { useState } from "react";
import "../../styles/new_main_design/newprojectcard.css";
import NewSkillBox from "./NewSkillBox";
import Internet from "../../assets/bwicons/internet.svg?react";
import Github from "../../assets/bwicons/github2.svg?react";

function NewProjectCard(props) {
  const [showDesc, setShowDesc] = useState(false);

  const handleMouseEnter = () => {
    console.log("xd");
    setShowDesc(true);
  };

  const handleMouseExit = () => {
    setShowDesc(false);
    console.log("leaving");
  };

  return (
    <div
      className="newProjectCard"
      onMouseOver={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseExit()}
    >
      {/* <div className="newCardHeading">{props.heading}</div> */}
      <div className={`newProjectDesc ${showDesc}`}>
        <p className="projectHeading">{props.heading}</p>
        <p className="projText">{props.text}</p>
        <div className="projectLinksDiv">
          <button
            className="btnCard"
            onClick={() => window.open(props.projectLink, "_blank")}
          >
            <Internet className="projectLinkIcon" />
            Project site
          </button>
          <button
            className="btnCard"
            onClick={() => window.open(props.feRepo, "_blank")}
          >
            <Github className="projectLinkIcon" />
            Frontend Repo
          </button>
          {props.type != "Fullstack" ? null : (
            <button
              className="btnCard"
              onClick={() => window.open(props.beRepo, "_blank")}
            >
              <Github className="projectLinkIcon" />
              Backend Repo
            </button>
          )}
        </div>
      </div>
      <div className="newProjectImg">
        <img className="cardImgSmall" src={props.smallPic} />
      </div>
      <div className="techCard">
        {props.skills.map((item, index) => (
          <NewSkillBox key={index} name={item.name} />
        ))}
      </div>
      {/* {props.isHosted ? (
        <div className="newProjectLink">{props.projectLink}</div>
      ) : null} */}
    </div>
  );
}

export default NewProjectCard;
