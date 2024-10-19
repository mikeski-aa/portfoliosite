import contact from "../../utils/contactData";
import NewContactBox from "./NewContactBox";
import "../../styles/new_main_design/newcontactme.css";

function NewContactMe() {
  return (
    <div className="newContactContainer">
      <div className="contactMeHeadDiv">
        <div className="contactBlurb new">
          Are you interested in collaborating together or have any questions
          about any of my projects?
        </div>
      </div>
      <div className="contactMeBtnDiv">
        {contact.map((item, index) => (
          <NewContactBox key={index} name={item.name} />
        ))}
      </div>
      <div className="mobileContainer">
        {window.innerWidth <= 963 ? (
          <div className="mobileMessage">
            It looks like you are viewing this page on a mobile device! Not all
            the features are available on mobile, try the{" "}
            <span className="brackStyle">desktop</span> site to get access to
            all of the features!
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default NewContactMe;
