import "../styles/file.css";
import ReactIcon from "../assets/bwicons/react.svg?react";
import JSIcon from "../assets/bwicons/yellowjs.svg?react";
import { GlobalContext } from "../App";
import { useContext } from "react";
import { helperClickStateUpdate } from "../utils/helperStateUpdates";
import bonusPage from "../utils/bonusPageScript";
import { checkOrAddPage } from "../utils/helperStateUpdates";

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
  const handleItemClick = () => {
    checkOrAddPage(
      globalContext.navItems,
      globalContext.setNavItems,
      globalContext.defaultPages,
      props.name
    );
    // if (props.bonus) {
    //   return bonusPage(
    //     globalContext.navItems,
    //     globalContext.setNavItems,
    //     globalContext.bonusPage,
    //     globalContext.setBonusPage
    //   );
    // }

    helperClickStateUpdate(
      globalContext.navItems,
      globalContext.setNavItems,
      name,
      globalContext.setCurrentPage,
      globalContext.setCpage
    );
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
