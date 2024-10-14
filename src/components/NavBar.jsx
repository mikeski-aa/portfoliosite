import MethodComponent from "../assets/icons/symbol-method.svg?react";
import ReactIconComponent from "../assets/icons/react.svg?react";
import JSIconComponent from "../assets/bwicons/yellowjs.svg?react";
import Arrow from "../assets/arrow.svg?react";
import "../styles/navbar.css";
import { useState, useContext } from "react";
import NavButton from "./NavButton";
import { GlobalContext } from "../App";

function NavBar(props) {
  const globalContext = useContext(GlobalContext);

  return (
    <>
      <div className="buttonContainer">
        {globalContext.navItems.map((item, index) => (
          <NavButton
            key={index}
            index={index}
            name={item.name}
            active={item.active}
            shortname={item.shortname}
          />
        ))}
      </div>
      <div className="appLocation">
        <div className="fileLoc">
          {"src"}
          <Arrow className="smallIcon arrow" />
          {"components"}
          <Arrow className="smallIcon arrow" />
        </div>
        <div className="fileLoc">
          {props.name === "bonusPage.js" ? null : (
            <ReactIconComponent className="smallIcon" />
          )}{" "}
          {props.currentPage} <Arrow className="smallIcon arrow" />
        </div>
        <div className="fileLoc">
          <MethodComponent className="smallIcon" />
          {props.cPage}
        </div>
      </div>
    </>
  );
}

export default NavBar;
