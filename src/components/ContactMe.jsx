import "../styles/contactme.css";
import contact from "../utils/contactData";
import ContactBox from "./ContactBox";

function ContactMe() {
  return (
    <div className="contactMeComponent">
      <div className="codeStyle">
        <div className="line">
          import <span className="fileStyle">ContactBox</span> from{" "}
          <span className="linkStyle">"./ContactBox";</span>
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
        {contact.map((item, index) => (
          <ContactBox key={index} name={item.name} />
        ))}
      </div>
      <div className="line">&nbsp;&nbsp;&nbsp;{`);`}</div>
    </div>
  );
}

export default ContactMe;
