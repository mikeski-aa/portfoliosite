import { useState } from "react";
import Arrow from "../assets/arrow.svg?react";
import File from "./File";
import files from "../utils/files";
import "../styles/folder.css";

function Folder(props) {
  const [rootStat, setFolderStat] = useState(false);
  const [childOneStat, setChildOneStat] = useState(false);
  const [childTwoStat, setChildTwoStat] = useState(false);
  const [childThreeStat, setChildThreeStat] = useState(false);

  const handleOuterClick = () => {
    if (rootStat) {
      setFolderStat(false);
    } else {
      setFolderStat(true);
    }
  };

  const handleChildOne = () => {
    if (childOneStat) {
      setChildOneStat(false);
    } else {
      setChildOneStat(true);
    }
  };

  const handleChildTwo = () => {
    if (childTwoStat) {
      setChildTwoStat(false);
    } else {
      setChildTwoStat(true);
    }
  };

  const handleChildThree = () => {
    if (childThreeStat) {
      setChildThreeStat(false);
    } else {
      setChildThreeStat(true);
    }
  };

  // I am thinking this component could be re-written using recursive components
  return (
    <div className="folderDiv">
      <button className="folderBtn" onClick={handleOuterClick}>
        <Arrow className={`folderChevron ${rootStat}`} />
        {props.rootName}
      </button>
      <div className={`fileList ${rootStat} childOne`}>
        <button className="folderBtn btnOne" onClick={handleChildOne}>
          <Arrow className={`folderChevron ${childOneStat}`} />
          {props.childOne}
        </button>
        <div className={`fileList ${childOneStat} childTwo`}>
          <button className="folderBtn btnTwo" onClick={handleChildTwo}>
            <Arrow className={`folderChevron ${childTwoStat}`} />
            {props.childTwo}
          </button>
          <div className={`fileList ${childTwoStat} componentList`}>
            {files.map((item, index) => (
              <File key={index} name={item.name} />
            ))}
          </div>
          <button className="folderBtn btnThree" onClick={handleChildThree}>
            <Arrow className={`folderChevron ${childThreeStat}`} />
            {props.childThree}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Folder;
