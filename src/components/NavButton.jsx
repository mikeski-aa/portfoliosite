import { useState, useContext } from "react";
import "../styles/navbutton.css";
import { GlobalContext } from "../App";
import JSIconComponent from "../assets/bwicons/yellowjs.svg?react";
import ReactIconComponent from "../assets/icons/react.svg?react";
import CrossIcon from "../assets/bwicons/cross2.svg?react";
import { removeStateItem } from "../utils/helperStateUpdates";
import { updateDisabledPagesState } from "../utils/helperStateUpdates";
import { enablAllPages } from "../utils/helperStateUpdates";
import checkForBonus from "../utils/checkForBonus";
import bonusActiveSet from "../utils/bonusActiveSet";
import deactivateBonusPage from "../utils/deactivateBonusPage";

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
    setMouseOver(true);
  };

  const handleMouseLeave = () => {
    setMouseOver(false);
  };

  const handleCloseClick = () => {
    // if we're about to close last tab and bonus page is still open, need to make sure it is in focus
    // idea is to check if navItems contains bonus page, if it does we need to do some stuff.

    if (globalContext.navItems.length === 2) {
      if (checkForBonus(globalContext.navItems)) {
        globalContext.setBonusPage(true);
        bonusActiveSet(globalContext.navItems, globalContext.setNavItems);
      }
    }
    removeStateItem(
      globalContext.navItems,
      globalContext.setNavItems,
      props.name
    );

    updateDisabledPagesState(
      globalContext.defaultPages,
      globalContext.setDefaultPages,
      props.shortname
    );

    // close not only the tab, but also stop displaying the page and return to regular "jsx" pages shown to user
    if (props.name === "bonusPage.js") {
      globalContext.setBonusPage(false);
      enablAllPages(
        globalContext.defaultPages,
        globalContext.setDefaultPages,
        globalContext.navItems
      );
      // deactivateBonusPage(
      //   globalContext.defaultPages,
      //   globalContext.setDefaultPages
      // );
      return;
    }
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
        onClick={() => handleCloseClick()}
      >
        <CrossIcon className="closePageIcon" />
      </button>
    </div>
  );
}

export default NavButton;
