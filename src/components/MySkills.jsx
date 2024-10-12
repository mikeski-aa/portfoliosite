import "../styles/myskills.css";
import cssIcon from "../assets/icons/css.svg";
import htmlIcon from "../assets/icons/html.svg";
import jsIcon from "../assets/icons/js.svg";
import mongoIcon from "../assets/icons/mongo.svg";
import nodeIcon from "../assets/icons/node.svg";
import psqlIcon from "../assets/icons/psql.svg";
import reactIcon from "../assets/icons/react.svg";
import photoshopIcon from "../assets/icons/photoshop.svg";

function MySkills() {
  return (
    <div className="mySkillsComponent">
      <div className="codeStyle">
        <div className="line">
          import <span className="fileStyle">cssIcon</span> from{" "}
          <span className="linkStyle">"../assets/icons/css.svg"</span>
        </div>
        <div className="line">
          import <span className="fileStyle">htmlIcon</span> from{" "}
          <span className="linkStyle">
            import htmlIcon from "../assets/icons/html.svg";
          </span>
        </div>
        <div className="line">
          import <span className="linkStyle">"../styles/myskills.css";</span>
        </div>
        <br></br>
        <div className="line">
          <span className="fcnStyle">function</span>{" "}
          <span className="nameStyle">My_skills</span>
          <span className="brackStyle">
            {"("}
            <span className="fileStyle">props</span>
            {") {"}
          </span>
        </div>
        <div>...</div>

        <div className="line">&nbsp;&nbsp;&nbsp;{`return (`}</div>
      </div>
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
        <div className="skillBox">
          <img src={photoshopIcon} className="skillIcon"></img>
          <div className="heading">Photoshop</div>
        </div>
      </div>
    </div>
  );
}

export default MySkills;
