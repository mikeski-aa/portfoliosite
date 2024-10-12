import "../styles/projectcomponent.css";

function ProjectComponent(props) {
  // this component should conditionally render depending on input;

  return (
    <div className="projectContainer">
      <div className="projectHeading">{props.title}</div>
      <div className="projectText">{props.desc}</div>
      <div className="projectLink">
        <a target="_blank" href={props.projectLink} className="projectLink">
          Project link
        </a>
      </div>
      <div className="repoLink">
        <a href={props.repoLink} className="projectLink">
          Repo link
        </a>
      </div>
    </div>
  );
}

export default ProjectComponent;
