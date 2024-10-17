import "../../styles/new_main_design/newpagedesign";
import { GlobalContext } from "../../App";
import { useContext } from "react";

function NewMainPageDesign() {
  return (
    <div className="newDesignDiv">
      <div className="newSection About"></div>
      <div className="newSection Skills"></div>
      <div className="newSection Projects"></div>
      <div className="newSection Contact"></div>
    </div>
  );
}

export default NewMainPageDesign;
