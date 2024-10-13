import "../styles/file.css";
import ReactIcon from "../assets/bwicons/react.svg?react";
import { GlobalContext } from "../App";
import { useContext } from "react";
import { helperClickStateUpdate } from "../utils/helperStateUpdates";

function File(props) {
  const globalContext = useContext(GlobalContext);
  const name = props.name + `.jsx`;

  const handleItemClick = () => {
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
      <ReactIcon className="fileIcon" />
      {props.name}
      {`.jsx`}
    </button>
  );
}

export default File;
