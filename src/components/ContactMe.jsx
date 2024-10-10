import "../styles/contactme.css";
import linIcon from "../assets/icons/linkedin.svg";
import emailIcon from "../assets/icons/email.svg";

function ContactMe() {
  return (
    <div className="contactMeComponent">
      <div className="contactMeTitle">
        <h2>Contact me</h2>
      </div>
      <div className="contactMeDiv">
        <button className="contactOption">
          <img src={linIcon} className="contactIcon"></img>
          LinkedIn
        </button>
        <button className="contactOption">
          <img src={emailIcon} className="contactIcon"></img>
          Email
        </button>
      </div>
    </div>
  );
}

export default ContactMe;
