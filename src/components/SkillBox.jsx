import "../styles/skillbox.css";
import CssIcon from "../assets/bwicons/css.svg?react";
import HtmlIcon from "../assets/bwicons/html.svg?react";
import JsIcon from "../assets/bwicons/js.svg?react";
import MongoIcon from "../assets/bwicons/mongo.svg?react";
import NodeIcon from "../assets/bwicons/node.svg?react";
import PsIcon from "../assets/bwicons/photoshop.svg?react";
import PsqlIcon from "../assets/bwicons/postgres.svg?react";
import ReactIcon from "../assets/bwicons/react.svg?react";

function SkillBox(props) {
  const icons = {
    CSS: <CssIcon />,
    HTML: <HtmlIcon />,
    JavaScript: <JsIcon />,
    MongoDB: <MongoIcon />,
    Node: <NodeIcon />,
    Photoshop: <PsIcon />,
    PostgreSQL: <PsqlIcon />,
    React: <ReactIcon />,
  };

  const renderedIcon = icons[props.name];

  return (
    <div className="skillBox">
      {renderedIcon ? renderedIcon : null}

      <div className="heading">{props.name}</div>
    </div>
  );
}

export default SkillBox;
