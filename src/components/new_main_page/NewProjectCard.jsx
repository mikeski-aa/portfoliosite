import "../../styles/new_main_design/newprojectcard.css";

function NewProjectCard(props) {
  return (
    <div className="newProjectCard">
      {/* <div className="newCardHeading">{props.heading}</div> */}
      <div className="newProjectImg">
        <img className="cardImgSmall" src={props.smallPic} />
      </div>
      {/* <div className="newProjectDesc">{props.text}</div> */}
      {/* {props.isHosted ? (
        <div className="newProjectLink">{props.projectLink}</div>
      ) : null} */}
    </div>
  );
}

export default NewProjectCard;
