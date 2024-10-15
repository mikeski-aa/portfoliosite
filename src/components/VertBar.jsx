import "../styles/vertbar.css";
import FilesIcon from "../assets/bwicons/filealt.svg?react";
import GithubIcon from "../assets/bwicons/github2.svg?react";
import LinkedIn from "../assets/bwicons/linkedin.svg?react";
import Email from "../assets/bwicons/email.svg?react";
import WindowRestoreIcon from "../assets/bwicons/windowrestore.svg?react";
import LineIcon from "../assets/bwicons/linesvg.svg?react";
import Cross from "../assets/bwicons/cross2.svg?react";
import Explorer from "./Explorer";
import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../App";

function VertBar() {
  const [showExp, setShowExp] = useState(false);
  const [emailModal, setEmailModal] = useState(false);
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

  const handleGithubClick = () => {
    window.open("https://github.com/mikeski-aa", "__blank");
  };

  const handleLinkedInClick = () => {
    window.open("https://linkedin.com", "__blank");
  };

  const handleEmailClick = () => {
    // window.open("mailto:dev.m.nowak@gmail.com");
    setEmailModal(true);
  };

  const handleCloseModal = () => {
    setEmailModal(false);
  };

  const handleKeyPress = (e) => {
    console.log(e.code);
    if (e.key === "Escape") {
      setEmailModal(false);
    }
  };

  // escape to close modal
  useEffect(() => {
    function handleEscClick(e) {
      if (e.code === "Escape") setEmailModal(false);
    }

    document.addEventListener("keydown", handleEscClick);

    return () => document.removeEventListener("keydown", handleEscClick);
  }, []);

  return (
    <div className="vertBar">
      <div
        className={`modal ${emailModal}`}
        onKeyDown={(e) => handleKeyPress(e)}
      >
        <div className="modalContent">
          <div className="modalTopBar">
            <button className="modalBtn">
              <LineIcon className="winIcons" />
            </button>
            <button className="modalBtn">
              <WindowRestoreIcon className="winIcons" />
            </button>
            <button className="modalBtn close" onClick={handleCloseModal}>
              <Cross className="winIcons crossImg" />
            </button>
          </div>
          <div className="modalText">Email me at: dev.m.nowak@gmail.com</div>
        </div>
      </div>
      <div className="vertBtnDiv">
        <button className={`vertBtn ${showExp}`} onClick={handleExplorerClick}>
          <FilesIcon className={`vertIcon ${showExp}`} />
        </button>
        <button className="vertBtn" onClick={handleGithubClick}>
          <GithubIcon className="vertIcon" />
        </button>
        <button className="vertBtn" onClick={handleLinkedInClick}>
          <LinkedIn className="vertIcon" />
        </button>
        <button className="vertBtn" onClick={handleEmailClick}>
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
