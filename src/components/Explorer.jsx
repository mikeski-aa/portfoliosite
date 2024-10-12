import "../styles/explorer.css";
import Folder from "./Folder";

function Explorer() {
  return (
    <div className="explorerContainer">
      <div className="explorerHeading">Explorer</div>
      <div className="explorerContent">
        <Folder name="PORTFOLIOSITE [WSL:UBUNTU]" />
        <Folder name="src" />
        <Folder name="components" />
      </div>
    </div>
  );
}

export default Explorer;
