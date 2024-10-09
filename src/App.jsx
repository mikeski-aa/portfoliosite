import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="header">
        <button className="navBtn">Nav buttons</button>
        <button className="navBtn">Nav buttons</button>
        <button className="navBtn">Nav buttons</button>
        <button className="navBtn">Nav buttons</button>
      </div>
      <div className="mainCont">
        <div className="aboutMeDivContainer">
          <div className="aboutMeHeader">About me div</div>
          <div className="aboutMeMain">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            voluptas consequatur quae ducimus corporis soluta.
          </div>
        </div>
        <div className="myProjectsDiv">My projects go here</div>
        <div className="mySkills">My skills go here</div>
        <div className="contactMeDiv">Contact details</div>
      </div>
    </>
  );
}

export default App;
