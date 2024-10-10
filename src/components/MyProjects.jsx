import "../styles/myprojects.css";
import ProjectBox from "./ProjectBox";

function MyProjects() {
  return (
    <div className="myProjectsComponent">
      <div className="myProjectsTitle">
        <h2>My projects</h2>
      </div>
      <div className="myProjectsContainer">
        <ProjectBox />
      </div>
    </div>
  );
}

export default MyProjects;
