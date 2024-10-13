import "../styles/myskills.css";
import SkillBox from "./SkillBox";
import skills from "../utils/skillsData";
import ExportLine from "./ExportLine";
import CodeComponent from "./CodeComponent";

function MySkills() {
  return (
    <div className="mySkillsComponent">
      <CodeComponent
        firstImport="SkillBox"
        firstImportLocation={`"./SkillBox"`}
        styleImportLink={`"../utils/skillsData"`}
        functionName="My_skills"
      />
      <div className="mySkillsTitle">
        <h2>My_skills</h2>
      </div>
      <div className="mySkillsDiv">
        {skills.map((item, index) => (
          <SkillBox key={index} name={item.name} />
        ))}
      </div>
      <ExportLine text="My_skills" />
    </div>
  );
}

export default MySkills;
