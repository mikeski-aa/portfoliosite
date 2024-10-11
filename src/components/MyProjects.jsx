import { useState } from "react";
import "../styles/myprojects.css";
import OdinbookCarousel from "./OdinbookCarousel";
import MessengerCarousel from "./MessengerCarousel";

function MyProjects() {
  return (
    <div className="myProjectsComponent">
      <div className="myProjectsTitle">
        <h2>My projects</h2>
      </div>
      <div className="myProjectsContainer">
        <OdinbookCarousel />
        <MessengerCarousel />
      </div>
    </div>
  );
}

export default MyProjects;
