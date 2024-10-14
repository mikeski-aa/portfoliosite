import { useState, useContext } from "react";
import "../styles/navbutton.css";
import { GlobalContext } from "../App";
import JSIconComponent from "../assets/bwicons/yellowjs.svg?react";
import ReactIconComponent from "../assets/icons/react.svg?react";
import CrossIcon from "../assets/bwicons/cross2.svg?react";

function NavButton(props) {
  const [mouseOver, setMouseOver] = useState(false);
  const globalContext = useContext(GlobalContext);

  // handle setting index data when tab is beggining to be dragged
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("index", index);
  };

  // handle drop - set new index, splice array replacing item positions.
  // set new state to update the layout
  const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    const sourceIndex = parseInt(e.dataTransfer.getData("index"));
    const newItems = [...globalContext.navItems];
    newItems.splice(targetIndex, 0, newItems.splice(sourceIndex, 1)[0]);
    globalContext.setNavItems(newItems);
  };

  // disable default behaviour, otherwise drag won't work
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // handle mouseover enter and exit, for toggling display of close button
  const handleMouseEnter = (e) => {
    console.log(e.target.innerText);
    setMouseOver(true);
  };

  const handleMouseLeave = () => {
    setMouseOver(false);
  };
  return (
    <div
      className={`navBtnDiv ${props.active}`}
      onMouseEnter={(e) => handleMouseEnter(e)}
      onMouseLeave={(e) => handleMouseLeave(e)}
    >
      <button
        className={`navBtn ${props.active}`}
        draggable
        onClick={(e) => globalContext.handleNavClick(e)}
        onDragStart={(e) => handleDragStart(e, props.index)}
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, props.index)}
      >
        {props.name === "bonusPage.js" ? (
          <JSIconComponent className="locationIcon" />
        ) : (
          <ReactIconComponent className="locationIcon" />
        )}
        {props.name}
      </button>
      <button
        className={
          props.active || mouseOver ? "closePageBtn show" : "closePageBtn hide"
        }
      >
        <CrossIcon className="closePageIcon" />
      </button>
    </div>
  );
}

export default NavButton;
