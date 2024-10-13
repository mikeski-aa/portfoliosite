import "../styles/terminalbox.css";
import BracketIcon from "../assets/terminalicons/brackets.svg?react";
import TrashIcon from "../assets/terminalicons/trash.svg?react";
import CubeIcon from "../assets/terminalicons/cube-svgrepo-com.svg?react";
import EllipsisIcon from "../assets/terminalicons/ellipsis.svg?react";
import PlusIcon from "../assets/terminalicons/pluslargegrey.svg?react";
import ArrowIcon from "../assets/arrow.svg?react";
import CrossIcon from "../assets/bwicons/cross2.svg?react";
import TerminalParagraph from "./TerminalParagraph";
import { useState } from "react";

function TerminalBox(props) {
  const [messages, setMessages] = useState([
    "Working",
    "testing",
    "2359832489",
  ]);

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
        <div className="terminalRightBtnDiv">
          <button className="terminalBtnDummy">
            <CubeIcon className="terminalIcon" /> bash - portfoliosite
          </button>
          <div className="terminalBtnDummyDuoDiv">
            <button className="terminalBtnDummyDuo">
              <PlusIcon className="terminalIcon" />
            </button>
            <button className="terminalBtnDummyDuo">
              <ArrowIcon className="terminalIcon down" />
            </button>
          </div>
          <button className="terminalBtnDummy">
            <TrashIcon className="terminalIcon" />
          </button>
          <button className="terminalBtnDummy">
            <EllipsisIcon className="terminalIcon" />
          </button>
          <button className="terminalBtnDummy">
            <ArrowIcon className="terminalIcon top" />
          </button>
          <button className="terminalBtnDummy">
            <CrossIcon className="terminalIcon invert" />
          </button>
        </div>
      </div>
      {/* <div className="redBox">Test</div> */}
      <div className="mainTerminalTextbox">
        {messages.map((item) => (
          <TerminalParagraph text={item} />
        ))}
      </div>
      <div className="terminalInputDiv">
        <TerminalParagraph text={""} />
        <input className="terminalInput"></input>
      </div>
    </div>
  );
}

export default TerminalBox;
