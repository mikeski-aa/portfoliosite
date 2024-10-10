import "../styles/projectbox.css";
import mergedLogin from "../assets/odinbookpics/mergedLogin.png";
import mergedMain from "../assets/odinbookpics/mergedMainFd.png";
import mergedFriends from "../assets/odinbookpics/mergedFriends.png";
import mergedProfile from "../assets/odinbookpics/mergedProfile.png";
import arrow from "../assets/arrow.svg";
import cross from "../assets/icons/cross.svg";
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
    <div className="projectBoxContainer">
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
      <div className="projectTitle">Odinbook</div>
      <div className="imageCarousel">
        <div className="imagesContainer">
          <img
            src={imgArr[carouselSeat]}
            className="carImg"
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
        </div>
      </div>
      <div
        className={`projectDescription ${descShow}`}
        onClick={handleDescShow}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae eos
        laborum eius est deleniti molestias, cumque facilis debitis quos non!
        Magnam, nulla sit molestias dolores reprehenderit, nam velit quisquam
        iusto accusantium eveniet delectus omnis explicabo veritatis nostrum ad
        commodi dolorem porro mollitia! Placeat quia, fugit quasi voluptatibus
        impedit dolore doloremque?
      </div>
    </div>
  );
}

export default OdinbookCarousel;
