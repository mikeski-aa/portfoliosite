import "../styles/explorer.css";
import Folder from "./Folder";

function Explorer() {
  return (
    <div className="explorerContainer">
      <div className="explorerHeading">Explorer</div>
      <div className="explorerContent">
        <Folder
          rootName="PORTFOLIOSITE [WSL:UBUNTU]"
          childOne="src"
          childTwo="components"
        />
      </div>
    </div>
  );
}

export default Explorer;
