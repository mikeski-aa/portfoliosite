import "../styles/myskills.css";
import cssIcon from "../assets/icons/css.svg";
import htmlIcon from "../assets/icons/html.svg";
import jsIcon from "../assets/icons/js.svg";
import mongoIcon from "../assets/icons/mongo.svg";
import nodeIcon from "../assets/icons/node.svg";
import psqlIcon from "../assets/icons/psql.svg";
import reactIcon from "../assets/icons/react.svg";

function MySkills() {
  return (
    <div className="mySkillsComponent">
      <div className="mySkillsTitle">
        <h2>My skills</h2>
      </div>
      <div className="mySkillsDiv">
        <div className="skillBox">
          <img src={jsIcon} className="skillIcon"></img>
          <div className="heading">Javascript</div>
        </div>
        <div className="skillBox">
          <img src={reactIcon} className="skillIcon"></img>
          <div className="heading">React</div>
        </div>
        <div className="skillBox">
          <img src={nodeIcon} className="skillIcon"></img>
          <div className="heading">Node.js</div>
        </div>
        <div className="skillBox">
          <img src={psqlIcon} className="skillIcon"></img>
          <div className="heading">PostgreSQL</div>
        </div>
        <div className="skillBox">
          <img src={mongoIcon} className="skillIcon"></img>
          <div className="heading">MongoDB</div>
        </div>
        <div className="skillBox">
          <img src={cssIcon} className="skillIcon"></img>
          <div className="heading">CSS</div>
        </div>
        <div className="skillBox">
          <img src={htmlIcon} className="skillIcon"></img>
          <div className="heading">HTML</div>
        </div>
      </div>
    </div>
  );
}

export default MySkills;
