import reactIcon from "../assets/icons/react.svg";
import methodIcon from "../assets/icons/symbol-method.svg";

function NavBar(props) {
  return (
    <>
      <div className="buttonContainer">
        {props.navItems.map((item, index) => (
          <button
            key={index}
            className={`navBtn ${item.active}`}
            draggable
            onClick={(e) => props.handleNavClick(e)}
            onDragStart={(e) => props.handleDragStart(e, index)}
            onDragOver={props.handleDragOver}
            onDrop={(e) => props.handleDrop(e, index)}
          >
            <img src={reactIcon} className="reactIconNav"></img>
            {item.name}
          </button>
        ))}
      </div>
      <div className="appLocation">
        <div className="fileLoc">{"src > "}</div>
        <div className="fileLoc">
          <img src={reactIcon} className="smallIcon" />{" "}
          {props.currentPage + " >"}
        </div>
        <div className="fileLoc">
          <img src={methodIcon} className="smallIcon"></img> {props.cPage}
        </div>
      </div>
    </>
  );
}

export default NavBar;
