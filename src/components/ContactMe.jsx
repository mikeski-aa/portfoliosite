import "../styles/contactme.css";
import contact from "../utils/contactData";
import ContactBox from "./ContactBox";
import ExportLine from "./ExportLine";
import CodeComponent from "./CodeComponent";
function ContactMe() {
  return (
    <div className="contactMeComponent">
      <CodeComponent
        firstImport="ContactBox"
        firstImportLocation={`"./ContactBox";`}
        styleImportLink={`"../styles/contactme.css";`}
        functionName="Contact_me"
      />
      <div className="contactMeTitle">
        <h2>Contact_me</h2>
      </div>
      <div className="contactMeDiv">
        {contact.map((item, index) => (
          <ContactBox key={index} name={item.name} />
        ))}
      </div>
      <ExportLine text="Contact_me" />
    </div>
  );
}

export default ContactMe;
