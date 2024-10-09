import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="header">
        <button>Nav buttons</button>
        <button>Nav buttons</button>
        <button>Nav buttons</button>
        <button>Nav buttons</button>
      </div>
      <div className="mainCont">
        <div className="aboutMeDiv">About me div</div>
        <div className="myProjectsDiv">My projects go here</div>
        <div className="mySkills">My skills go here</div>
        <div className="contactMeDiv">Contact details</div>
      </div>
    </>
  );
}

export default App;
