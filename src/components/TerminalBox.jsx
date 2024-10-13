import "../styles/terminalbox.css";
import BracketIcon from "../assets/terminalicons/brackets.svg?react";
import TrashIcon from "../assets/terminalicons/trash.svg?react";
import CubeIcon from "../assets/terminalicons/cubemoved.svg?react";
import EllipsisIcon from "../assets/terminalicons/ellipsis.svg?react";
import CrossIcon from "../assets/icons/cross.svg?react";
import ArrowIcon from "../assets/arrow.svg?react";

function TerminalBox(props) {
  return (
    <div className={`terminalDiv ${props.terminalStatus}`}>
      <div className="terminalHeader">
        <div className="terminalLeftBtnDiv">
          <button className="terminalBtn">PROBLEMS</button>
          <button className="terminalBtn">OUTPUT</button>
          <button className="terminalBtn">DEBUG CONSOLE</button>
          <button className="terminalBtn">TERMINAL</button>
          <button className="terminalBtn">PORTS</button>
        </div>
        <div className="terminalRightBtnDiv"></div>
      </div>
      <div className="mainTerminalBox">asdasdasdasd</div>
    </div>
  );
}

export default TerminalBox;
