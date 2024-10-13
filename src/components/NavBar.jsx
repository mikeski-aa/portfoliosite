import MethodComponent from "../assets/icons/symbol-method.svg?react";
import ReactIconComponent from "../assets/icons/react.svg?react";
import JSIconComponent from "../assets/bwicons/yellowjs.svg?react";
import Arrow from "../assets/arrow.svg?react";
import "../styles/navbar.css";

function NavBar(props) {
  // handle setting index data when tab is beggining to be dragged
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("index", index);
  };

  // handle drop - set new index, splice array replacing item positions.
  // set new state to update the layout
  const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    const sourceIndex = parseInt(e.dataTransfer.getData("index"));
    const newItems = [...props.navItems];
    newItems.splice(targetIndex, 0, newItems.splice(sourceIndex, 1)[0]);
    props.setNavItems(newItems);
  };

  // disable default behaviour, otherwise drag won't work
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="buttonContainer">
        {props.navItems.map((item, index) => (
          <button
            key={index}
            className={`navBtn ${item.active}`}
            draggable
            onClick={(e) => props.handleNavClick(e)}
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
          >
            {item.name === "bonusPage.js" ? (
              <JSIconComponent className="locationIcon" />
            ) : (
              <ReactIconComponent className="locationIcon" />
            )}
            {item.name}
          </button>
        ))}
      </div>
      <div className="appLocation">
        <div className="fileLoc">
          {"src"}
          <Arrow className="smallIcon arrow" />
          {"components"}
          <Arrow className="smallIcon arrow" />
        </div>
        <div className="fileLoc">
          {props.name === "bonusPage.js" ? null : (
            <ReactIconComponent className="smallIcon" />
          )}{" "}
          {props.currentPage} <Arrow className="smallIcon arrow" />
        </div>
        <div className="fileLoc">
          <MethodComponent className="smallIcon" />
          {props.cPage}
        </div>
      </div>
    </>
  );
}

export default NavBar;
