import { useState } from "react";
import "../styles/myprojects.css";
import OdinbookCarousel from "./OdinbookCarousel";
import MessengerCarousel from "./MessengerCarousel";
import ProjectComponent from "./ProjectComponent";
import projects from "../utils/projectData";

function MyProjects() {
  return (
    <div className="myProjectsComponent">
      <div className="codeStyle">
        <div className="line">
          import <span className="fileStyle">OdinbookCarousel</span> from{" "}
          <span className="linkStyle">"./OdinbookCarousel";</span>
        </div>
        <div className="line">
          import <span className="linkStyle">"../styles/myprojects.css";</span>
        </div>
        <br></br>
        <div className="line">
          <span className="fcnStyle">function</span>{" "}
          <span className="nameStyle">My_projects</span>
          <span className="brackStyle">
            {"("}
            <span className="fileStyle">props</span>
            {") {"}
          </span>
        </div>
        <div>...</div>

        <div className="line">&nbsp;&nbsp;&nbsp;{`return (`}</div>
      </div>
      <div className="myProjectsTitle">
        <h2>My projects</h2>
      </div>
      <div className="myProjectsContainer">
        <OdinbookCarousel />
        {/* <MessengerCarousel /> */}

        <div className="smallerProjects">
          {projects.map((item, index) => (
            <ProjectComponent
              key={index}
              title={item.title}
              desc={item.desc}
              projectLink={item.projectLink}
              repoLink={item.repoLink}
            ></ProjectComponent>
          ))}
        </div>
      </div>
      <div className="line">&nbsp;&nbsp;&nbsp;{`);`}</div>
    </div>
  );
}

export default MyProjects;
