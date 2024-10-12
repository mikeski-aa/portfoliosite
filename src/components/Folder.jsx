import { useState } from "react";
import Arrow from "../assets/arrow.svg?react";

function Folder(props) {
  const [folderStat, setFolderStat] = useState(false);
  const handleFolderClick = () => {
    if (folderStat) {
      setFolderStat(false);
    } else {
      setFolderStat(true);
    }
  };

  // I am thinking this component could be re-written using recursive components
  return (
    <div className="folderDiv">
      <button className="folderBtn" onClick={handleFolderClick}>
        <Arrow className={`folderChevron ${folderStat}`} />
        {props.name}
      </button>
      <div className={`fileList ${folderStat}`}>
        <button className="folderBtn" onClick={handleFolderClick}>
          <Arrow className={`folderChevron ${folderStat}`} />
          {props.name}
        </button>
        <div className={`fileList ${folderStat}`}></div>
      </div>
    </div>
  );
}

export default Folder;
