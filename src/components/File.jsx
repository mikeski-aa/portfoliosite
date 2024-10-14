import "../styles/file.css";
import ReactIcon from "../assets/bwicons/react.svg?react";
import JSIcon from "../assets/bwicons/yellowjs.svg?react";
import { GlobalContext } from "../App";
import { useContext } from "react";
import { helperClickStateUpdate } from "../utils/helperStateUpdates";
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
  // this function will check whether the page clicked is already "opened"
  // if it is not opened, the page will be added to active page state from default state
  // this function might need to be moved and refactored in seperate JS file honestly
  const handleItemClick = () => {
    console.log(globalContext.navItems);
    let shallowCopy = [...globalContext.navItems];
    const secondCopy = [...globalContext.defaultPages];

    let found = false;
    let objectHolder;

    for (let x = 0; x < shallowCopy.length; x++) {
      if (shallowCopy[x].shortname === props.name) {
        found = true;
      }
    }

    if (found) {
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
