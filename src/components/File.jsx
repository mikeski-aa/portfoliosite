import "../styles/file.css";
import ReactIcon from "../assets/bwicons/react.svg?react";
import JSIcon from "../assets/bwicons/yellowjs.svg?react";
import { GlobalContext } from "../App";
import { useContext } from "react";
import {
  helperClickStateUpdate,
  smoothScroll,
} from "../utils/helperStateUpdates";
import bonusPage from "../utils/bonusPageScript";

function File(props) {
  const globalContext = useContext(GlobalContext);
  const name = props.name + `.jsx`;

  // prevent rendering of bonus in components folder
  if (props.nobonus && props.name === "bonusPage") {
    return null;
  }

  // if page was closed, it should be reopened.
  // if a page is already opened, scroll down to it.
  // bonus handling also needs to be implemented here.
  // important to re-set visible as true
  const handleItemClick = () => {
    const shallowCopy = [...globalContext.navItems];
    const secondCopy = [...globalContext.defaultPages];

    let found = false;
    let scrollRef;
    let objectHolder;

    for (let x = 0; x < shallowCopy.length; x++) {
      if (shallowCopy[x].shortname === props.name) {
        found = true;
        scrollRef = shallowCopy[x].refLink;
      }
    }

    if (found) {
      if (props.name === "bonusPage") {
        return;
      }
      smoothScroll(scrollRef);
      return console.log("found, ending the thingy here");
    }

    // go through default objects and find the one we need
    for (let x = 0; x < secondCopy.length; x++) {
      if (secondCopy[x].shortname === props.name) {
        secondCopy[x].disabled = false;
        objectHolder = secondCopy[x];
      }
    }

    shallowCopy.push(objectHolder);

    globalContext.setNavItems(shallowCopy);

    // helperClickStateUpdate(
    //   globalContext.navItems,
    //   globalContext.setNavItems,
    //   name,
    //   globalContext.setCurrentPage,
    //   globalContext.setCpage
    // );
  };

  return (
    <button
      className={`fileBtn ${props.name} ${globalContext.activePage}`}
      onClick={handleItemClick}
    >
      {props.bonus ? (
        <JSIcon className="fileIcon" />
      ) : (
        <ReactIcon className="fileIcon" />
      )}

      {props.name}
      {props.type}
    </button>
  );
}

export default File;
