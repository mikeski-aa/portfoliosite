import "../styles/myprojects.css";
import OdinbookCarousel from "./OdinbookCarousel";

function MyProjects() {
  return (
    <div className="myProjectsComponent">
      <div className="myProjectsTitle">
        <h2>My projects</h2>
      </div>
      <div className="myProjectsContainer">
        <OdinbookCarousel />
      </div>
    </div>
  );
}

export default MyProjects;
