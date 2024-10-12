import "../styles/vertbar.css";
import FilesIcon from "../assets/bwicons/filealt.svg?react";
import GithubIcon from "../assets/bwicons/github2.svg?react";
import LinkedIn from "../assets/bwicons/linkedin.svg?react";
import Email from "../assets/bwicons/email.svg?react";

function VertBar() {
  return (
    <div className="vertBar">
      <button className="vertBtn">
        <FilesIcon className="vertIcon" />
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
  );
}

export default VertBar;
