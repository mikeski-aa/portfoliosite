import "../styles/vertbar.css";
import FilesIcon from "../assets/bwicons/filealt.svg?react";
import GithubIcon from "../assets/bwicons/github2.svg?react";
import LinkedIn from "../assets/bwicons/linkedin.svg?react";
import Email from "../assets/bwicons/email.svg?react";
import Explorer from "./Explorer";
import { useState, useContext } from "react";
import { GlobalContext } from "../App";

function VertBar() {
  const [showExp, setShowExp] = useState(false);
  const globalContext = useContext(GlobalContext);

  const handleExplorerClick = () => {
    if (showExp) {
      setShowExp(false);
      globalContext.setSidebarStat(false);
    } else {
      setShowExp(true);
      globalContext.setSidebarStat(true);
    }
  };
  return (
    <div className="vertBar">
      <div className="vertBtnDiv">
        <button className={`vertBtn ${showExp}`} onClick={handleExplorerClick}>
          <FilesIcon className={`vertIcon ${showExp}`} />
        </button>
        <button className="vertBtn">
          <GithubIcon className="vertIcon" />
        </button>
        <button className="vertBtn">
          <LinkedIn className="vertIcon" />
        </button>
        <button className="vertBtn">
          <Email className="vertIcon" />
        </button>
      </div>
      <div className={`explorerDiv ${showExp}`}>
        <Explorer status={showExp} />
      </div>
    </div>
  );
}

export default VertBar;
