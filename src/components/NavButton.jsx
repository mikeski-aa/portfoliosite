import { useState, useContext } from "react";
import "../styles/navbutton.css";
import { GlobalContext } from "../App";
import JSIconComponent from "../assets/bwicons/yellowjs.svg?react";
import ReactIconComponent from "../assets/icons/react.svg?react";

function NavButton(props) {
  const [mouseOver, setMouseOver] = useState("");
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

  const handleMouseEnter = (e) => {
    console.log(e.target.innerText);
    setMouseOver(e.target.innerText);
  };

  const handleMouseLeave = () => {
    setMouseOver("");
  };
  return (
    <button
      className={`navBtn ${props.active}`}
      draggable
      onClick={(e) => globalContext.handleNavClick(e)}
      onDragStart={(e) => handleDragStart(e, props.index)}
      onDragOver={handleDragOver}
      onDrop={(e) => handleDrop(e, props.index)}
      onMouseEnter={(e) => handleMouseEnter(e)}
      onMouseLeave={(e) => handleMouseLeave(e)}
    >
      {props.name === "bonusPage.js" ? (
        <JSIconComponent className="locationIcon" />
      ) : (
        <ReactIconComponent className="locationIcon" />
      )}
      {props.name}
    </button>
  );
}

export default NavButton;
