import "../styles/projectbox.css";
// import mergedLogin from "../assets/odinbookpics/mergedLogin.png";
// import mergedMain from "../assets/odinbookpics/mergedMainFd.png";
// import mergedFriends from "../assets/odinbookpics/mergedFriends.png";
// import mergedProfile from "../assets/odinbookpics/mergedProfile.png";
import dualadmin from "../assets/messengerapp/dualadmin.png";
import dualconvo from "../assets/messengerapp/dualConvo.png";
import duallogin from "../assets/messengerapp/dualDMlogin.png";
import dualfriends from "../assets/messengerapp/dualFriends.png";
import dualgroup from "../assets/messengerapp/dualGroup.png";
import arrow from "../assets/arrow.svg";
import cross from "../assets/icons/cross.svg";
import { useState } from "react";

// very simple image carousel to go through project images
function MessengerCarousel() {
  const [carouselSeat, setCarouselSeat] = useState(0);
  const [descShow, setDescShow] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const imgArr = [duallogin, dualfriends, dualadmin, dualconvo, dualgroup];

  const handleGoLeft = () => {
    if (carouselSeat === 0) {
      setCarouselSeat(4);
    } else {
      setCarouselSeat(carouselSeat - 1);
    }
  };

  const handleGoRight = () => {
    if (carouselSeat === 4) {
      setCarouselSeat(0);
    } else {
      setCarouselSeat(carouselSeat + 1);
    }
  };

  // function to set active name
  const activeBtn = (btnNum) => {
    if (btnNum === 0 && carouselSeat === 0) {
      return "active";
    } else if (btnNum === 1 && carouselSeat === 1) {
      return "active";
    } else if (btnNum === 2 && carouselSeat === 2) {
      return "active";
    } else if (btnNum === 3 && carouselSeat === 3) {
      return "active";
    } else if (btnNum === 4 && carouselSeat === 4) {
      return "active";
    } else {
      return "inactive";
    }
  };

  // handle circle clicks
  const handleCircleClicks = (number) => {
    setCarouselSeat(number);
  };

  // handle desc toggle show
  const handleDescShow = () => {
    if (descShow === false) {
      setDescShow(true);
    } else {
      setDescShow(false);
    }
  };

  // handle opening modal
  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <div className={"projectBoxContainer"}>
      <div className={`modal ${modalOpen}`}>
        <div className="modalContent">
          <button className="closeBtn" onClick={handleCloseModal}>
            <img className="crossImg" src={cross}></img>
            Close
          </button>
          <img src={imgArr[carouselSeat]} className="largeImg"></img>
          <div className="modalBtns">
            <button className="carControl" onClick={handleGoLeft}>
              <img src={arrow} className="arrowImgLeft"></img>
            </button>
            <button className="carControl" onClick={handleGoRight}>
              <img src={arrow} className="arrowImgRight"></img>
            </button>
          </div>
        </div>
      </div>
      <div className="projectTitle">Messenger app</div>
      <div className="imageCarousel">
        <div className="imagesContainer">
          <img
            src={imgArr[carouselSeat]}
            className={"carImg"}
            onClick={handleModalOpen}
          ></img>
        </div>

        <div className="LRbuttons">
          <button className="arrowBtns" onClick={handleGoLeft}>
            <img src={arrow} className="arrowImgLeft"></img>
          </button>
          <button className="arrowBtns" onClick={handleGoRight}>
            <img src={arrow} className="arrowImgRight"></img>
          </button>
        </div>
        <div className="positionButtons">
          <button
            className={`btnx ${activeBtn(0)}`}
            onClick={() => handleCircleClicks(0)}
          ></button>
          <button
            className={`btnx ${activeBtn(1)}`}
            onClick={() => handleCircleClicks(1)}
          ></button>
          <button
            className={`btnx ${activeBtn(2)}`}
            onClick={() => handleCircleClicks(2)}
          ></button>
          <button
            className={`btnx ${activeBtn(3)}`}
            onClick={() => handleCircleClicks(3)}
          ></button>
          <button
            className={`btnx ${activeBtn(4)}`}
            onClick={() => handleCircleClicks(3)}
          ></button>
        </div>
      </div>
      <div
        className={`projectDescription ${descShow}`}
        onClick={handleDescShow}
      >
        <h4>Overview: </h4>
        Fullstack project - messenger application, allowing users to add
        friends, create groups and send messages between eachother. My main goal
        in this project was mainly focused around improving my backend skills
        and functionality first and foremost. The messenger functionality does
        not utilise websockets or similar technologies, hence refresh is
        required to update messages.
        <h4>Technologies used</h4>
        Language: Javascript
        <br></br>Frontend: React <br></br>Backend: Node, Express <br></br>
        Database: PostgreSQL (using PrismaORM)
        <h4>Key features</h4>
        Login and registration implemented using Passport.js middleware. Logging
        in utilises storing user credentials as a JWT token in localstorage.
        <br></br>Passwords are encrypted using bcrypt.js.
        <br></br>Validation is handled both on the frontend and backend. Backend
        validation leverages express-validator alongside Prisma's in-built
        validation.
        <br></br>Users are able to:
        <ul>
          <li>Register</li>
          <li>Log in</li>
          <li>Send friend requests and manage requests</li>
          <li>Create groups</li>
          <li>Send private messages or group messages</li>
          <li>
            Manage user profile: set online status, change display name, change
            user profile picture
          </li>
        </ul>
        <h4>Repos and links</h4>
      </div>
    </div>
  );
}

export default MessengerCarousel;
