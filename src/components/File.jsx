import "../styles/file.css";
import ReactIcon from "../assets/bwicons/react.svg?react";

function File(props) {
  return (
    <button className="fileBtn">
      <ReactIcon className="fileIcon" />
      {props.name}
    </button>
  );
}

export default File;
