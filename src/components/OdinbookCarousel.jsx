import "../styles/projectbox.css";
import mergedLogin from "../assets/odinbookpics/mergedLogin.png";
import mergedMain from "../assets/odinbookpics/mergedMainFd.png";
import mergedFriends from "../assets/odinbookpics/mergedFriends.png";
import mergedProfile from "../assets/odinbookpics/mergedProfile.png";
import Arrow from "../assets/arrow.svg?react";
import Cross from "../assets/icons/cross.svg?react";
import { useState } from "react";

// very simple image carousel to go through project images
function OdinbookCarousel() {
  const [carouselSeat, setCarouselSeat] = useState(0);
  const [descShow, setDescShow] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const imgArr = [mergedLogin, mergedMain, mergedFriends, mergedProfile];

  const handleGoLeft = () => {
    if (carouselSeat === 0) {
      setCarouselSeat(3);
    } else {
      setCarouselSeat(carouselSeat - 1);
    }
  };

  const handleGoRight = () => {
    if (carouselSeat === 3) {
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
            <Cross className="crossImg" />
          </button>
          <img src={imgArr[carouselSeat]} className="largeImg"></img>
          <div className="modalBtns">
            <button className="arrowBtns" onClick={handleGoLeft}>
              <Arrow className="arrowImgLeft" />
            </button>
            <button className="arrowBtns" onClick={handleGoRight}>
              <Arrow className="arrowImgRight" />
            </button>
          </div>
        </div>
      </div>
      <div className="projectTitle line testclass">Odinbook</div>
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
            <Arrow className="arrowImgLeft" />
          </button>
          <button className="arrowBtns" onClick={handleGoRight}>
            <Arrow className="arrowImgRight" />
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
        </div>
      </div>
      <div
        className={`projectDescription ${descShow}`}
        onClick={handleDescShow}
      >
        <h4 className="line bolder">Overview: </h4>
        <span className="fileStyle bolder">Fullstack project</span> - social
        media web app, strongly inspierd by Facebook in design and layout. This
        was my final project having successfully finished "The Odin Project"
        course. My goal with this project was to deliver a functional and
        responsive application for mobile and desktop users.
        <h4 className="line bolder">Technologies used</h4>
        <span className="fileStyle bolder">Language:</span> Javascript
        <br></br>
        <span className="fileStyle bolder">Frontend:</span> React <br></br>
        <span className="fileStyle bolder">Backend:</span> Node, Express{" "}
        <br></br>
        <span className="fileStyle bolder">Database:</span> PostgreSQL (using
        PrismaORM)
        <h4 className="line bolder">Key features</h4>
        <ul className="ulStyle">
          <li>
            <span className="fcnStyle bolder">Login and registration </span>
            implemented using Passport.js middleware.
          </li>
          <li>
            <span className="fcnStyle bolder">Logging in </span>
            utilises storing user credentials as a JWT token in localstorage.
          </li>
          <li>
            <span className="fcnStyle bolder">Encryption</span> of passwords
            done using bcrypt.js.
          </li>
          <li>
            <span className="fcnStyle bolder">Validation</span> is handled both
            on the frontend and backend. Backend validation leverages
            express-validator alongside Prisma's in-built validation.
          </li>
          <li>
            <span className="fcnStyle bolder">Guest login </span>- users are
            logged into a shared account
          </li>
        </ul>
        <span className="brackStyle bolder">Users are able to:</span>
        <ul>
          <li>Register</li>
          <li>Log in (into their registered account or guest)</li>
          <li>Create text posts, or posts with images</li>
          <li>Like and comment on posts</li>
          <li>Like comments</li>
          <li>Search for friends and send requests</li>
          <li>Manage requests</li>
          <li>Manage their profile - changing profile icon, profile banner</li>
        </ul>
        <h4 className="line">Repos and links</h4>
        <ul className="ulStyle">
          <li>
            <a
              className="linkStyle"
              target="_blank"
              href="https://odinbookproject.netlify.app/"
            >
              Project website
            </a>
          </li>
          <li>
            <a
              className="linkStyle"
              target="_blank"
              href="https://github.com/mikeski-aa/social-media-frontend"
            >
              Frontend repo
            </a>
          </li>
          <li>
            <a
              className="linkStyle"
              target="_blank"
              href="https://github.com/mikeski-aa/social-media-backend"
            >
              Backend repo
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default OdinbookCarousel;
