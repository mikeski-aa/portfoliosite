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
import { disableAllPages, enablAllPages } from "../utils/helperStateUpdates";
import bonusActiveSet from "../utils/bonusActiveSet";
import {
  checkPageIsOpen,
  addNewPageToNav,
  addBonusToNavNotEmpty,
  addBonusToNavIsEmpty,
  focusBonusManyPages,
} from "../utils/explorerHelperFunctions";

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

  // there is an issue when clicking on components
  // issue occurs if everything is closed except bonus page
  // probably not resetting visibility for bonus page correctly at one point or another
  // start there and look into it
  // this function is illegal it needs to be rewritten
  const handleItemClick = () => {
    // const shallowCopy = [...globalContext.navItems];
    // const secondCopy = [...globalContext.defaultPages];
    // console.log("handleitemclick shallow copy:  ");
    // console.log(shallowCopy);
    // let found = false;
    // let scrollRef;
    // let objectHolder;
    // if (globalContext.navItems.length === 0 && props.name === "bonusPage") {
    //   globalContext.setBonusPage(true);
    //   bonusActiveSet(globalContext.navItems, globalContext.setNavItems);
    // }
    // for (let x = 0; x < shallowCopy.length; x++) {
    //   if (shallowCopy[x].shortname === props.name) {
    //     found = true;
    //     scrollRef = shallowCopy[x].refLink;
    //   }
    // }
    // // weird bug where state is being introduced as bonusPage.js
    // console.log("here test");
    // // this means that the object we clicked in the explorer bar already exists as a tab
    // if (found) {
    //   if (props.name === "bonusPage") {
    //     console.log("FOUND AND NAME IS BP");
    //     disableAllPages(
    //       globalContext.defaultPages,
    //       globalContext.setDefaultPages
    //     );
    //     globalContext.setBonusPage(true);
    //     helperClickStateUpdate(
    //       globalContext.navItems,
    //       globalContext.setNavItems,
    //       "bonusPage.js",
    //       globalContext.setCurrentPage,
    //       globalContext.setCpage
    //     );
    //     return;
    //   }
    //   globalContext.setBonusPage(false);
    //   enablAllPages(
    //     globalContext.defaultPages,
    //     globalContext.setDefaultPages,
    //     globalContext.navItems
    //   );
    //   smoothScroll(scrollRef);
    //   return console.log("found, ending the thingy here");
    // }
    // // go through default objects and find the one we need in order to add a new tab
    // for (let x = 0; x < secondCopy.length; x++) {
    //   if (secondCopy[x].shortname === props.name) {
    //     secondCopy[x].disabled = false;
    //     objectHolder = secondCopy[x];
    //   }
    // }
    // console.log("here test2" + props.name);
    // console.log(shallowCopy);
    // shallowCopy.push(objectHolder);
    // globalContext.setNavItems(shallowCopy);
  };

  const handleItemClickRewrite = () => {
    console.log(globalContext.defaultPages);
    if (props.name === "bonusPage") {
      console.log("bonus page clicked");

      if (checkPageIsOpen(globalContext.navItems, props.name)) {
        // on repeat click we set bonus in focus
        // this means we have to disable and deactivate all other pages
        console.log("bonusPage is open");
        focusBonusManyPages(
          globalContext.navItems,
          globalContext.setNavItems,
          globalContext.defaultPages,
          globalContext.setDefaultPages
        );
      } else {
        if (globalContext.navItems.length < 1) {
          console.log("no items in nav");
          addBonusToNavIsEmpty(
            globalContext.defaultPages,
            globalContext.setNavItems,
            props.name,
            globalContext.navItems
          );
        } else {
          console.log("bonus page is not open");
          addBonusToNavNotEmpty(
            globalContext.defaultPages,
            globalContext.setNavItems,
            props.name,
            globalContext.navItems
          );
        }
      }
    } else {
      console.log("normal page clicked");
      // first we need to check if the page already exists or not
      if (checkPageIsOpen(globalContext.navItems, props.name)) {
        // page exists already.
        // we can scroll to it directly
        return smoothScroll(props.refLink);
      } else {
        // page is not open and  does NOT exist in navItems.
        // It needs to be added to navItems so that we can re-render the header
        console.log("setting new items");
        addNewPageToNav(
          globalContext.defaultPages,
          globalContext.setNavItems,
          props.name,
          globalContext.navItems
        );
      }
    }
  };

  return (
    <button
      className={`fileBtn ${props.name} ${globalContext.activePage}`}
      onClick={handleItemClickRewrite}
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
