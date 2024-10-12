import LinkedIn from "../assets/bwicons/linkedin.svg?react";
import Github from "../assets/bwicons/github2.svg?react";
import Email from "../assets/bwicons/email.svg?react";
import "../styles/contactbox.css";

function ContactBox(props) {
  const icons = {
    LinkedIn: <LinkedIn className="contactIcon" />,
    GitHub: <Github className="contactIcon" />,
    Email: <Email className="contactIcon" />,
  };

  const renderedIcon = icons[props.name];
  return (
    <button className="contactBox">
      {renderedIcon ? renderedIcon : null}
      {props.name}
    </button>
  );
}

export default ContactBox;
