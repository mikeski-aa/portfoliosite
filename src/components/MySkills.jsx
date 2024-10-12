import "../styles/myskills.css";
import SkillBox from "./SkillBox";
import skills from "../utils/skillsData";

function MySkills() {
  return (
    <div className="mySkillsComponent">
      <div className="codeStyle">
        <div className="line">
          import <span className="fileStyle">SkillBox</span> from{" "}
          <span className="linkStyle">"./SkillBox";</span>
        </div>
        <div className="line">
          import <span className="fileStyle">skills</span> from{" "}
          <span className="linkStyle">"../utils/skillsData";</span>
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
        {skills.map((item, index) => (
          <SkillBox key={index} name={item.name} />
        ))}
      </div>
      <div className="line">&nbsp;&nbsp;&nbsp;{`);`}</div>
    </div>
  );
}

export default MySkills;
