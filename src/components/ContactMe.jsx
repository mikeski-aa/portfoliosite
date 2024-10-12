import "../styles/contactme.css";
import linIcon from "../assets/icons/linkedin.svg";
import emailIcon from "../assets/icons/email.svg";

function ContactMe() {
  return (
    <div className="contactMeComponent">
      <div className="codeStyle">
        <div className="line">
          import <span className="fileStyle">linIcon</span> from{" "}
          <span className="linkStyle">"../assets/icons/linkedin.svg";</span>
        </div>
        <div className="line">
          import <span className="linkStyle">"../styles/contactme.css";</span>
        </div>
        <br></br>
        <div className="line">
          <span className="fcnStyle">function</span>{" "}
          <span className="nameStyle">Contact_me</span>
          <span className="brackStyle">
            {"("}
            <span className="fileStyle">props</span>
            {") {"}
          </span>
        </div>
        <div>...</div>

        <div className="line">&nbsp;&nbsp;&nbsp;{`return (`}</div>
      </div>
      <div className="contactMeTitle">
        <h2>Contact_me</h2>
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
