import CssIcon from "../../assets/bwicons/css.svg?react";
import HtmlIcon from "../../assets/bwicons/html.svg?react";
import JsIcon from "../../assets/bwicons/js.svg?react";
import MongoIcon from "../../assets/bwicons/mongo.svg?react";
import NodeIcon from "../../assets/bwicons/node.svg?react";
import PsIcon from "../../assets/bwicons/photoshop.svg?react";
import PsqlIcon from "../../assets/bwicons/postgres.svg?react";
import ReactIcon from "../../assets/bwicons/react.svg?react";
import ExpressIcon from "../../assets/bwicons/expressicon.svg?react";

function NewSkillBox(props) {
  const icons = {
    CSS: <CssIcon className="newSkillIcon" />,
    HTML: <HtmlIcon className="newSkillIcon" />,
    JavaScript: <JsIcon className="newSkillIcon" />,
    MongoDB: <MongoIcon className="newSkillIcon" />,
    Node: <NodeIcon className="newSkillIcon" />,
    Photoshop: <PsIcon className="newSkillIcon" />,
    PostgreSQL: <PsqlIcon className="newSkillIcon" />,
    React: <ReactIcon className="newSkillIcon" />,
    Express: <ExpressIcon className="newSkillIcon" />,
  };

  const renderedIcon = icons[props.name];

  return (
    <div className="newSkillBoxContainer">
      {renderedIcon ? renderedIcon : null}
      <div className="newSkillText">{props.name}</div>
    </div>
  );
}

export default NewSkillBox;
