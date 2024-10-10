import "../styles/projectbox.css";
import loginPc from "../assets/odinbookpics/loginpc.png";
import mainfeedPc from "../assets/odinbookpics/mainfeedpagepc.png";
import friendPc from "../assets/odinbookpics/friendspagepc.png";
import profilePc from "../assets/odinbookpics/profilepagepc.png";
import loginPhone from "../assets/odinbookpics/loginphone.png";
import mainPhone from "../assets/odinbookpics/mainfeedphone.png";
import friendPhone from "../assets/odinbookpics/friendphone.png";
import profilePhone from "../assets/odinbookpics/profilephone.png";
import arrow from "../assets/arrow.svg";
import { useState } from "react";

// very simple image carousel to go through project images
function OdinbookCarousel() {
  const [carouselSeat, setCarouselSeat] = useState(0);
  const [descShow, setDescShow] = useState(false);
  const imgArr = [
    loginPc,
    mainfeedPc,
    friendPc,
    profilePc,
    loginPhone,
    mainPhone,
    friendPhone,
    profilePhone,
  ];

  const handleGoLeft = () => {
    if (carouselSeat === 0) {
      setCarouselSeat(7);
    } else {
      setCarouselSeat(carouselSeat - 1);
    }
  };

  const handleGoRight = () => {
    if (carouselSeat === 7) {
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
    } else if (btnNum === 5 && carouselSeat === 5) {
      return "active";
    } else if (btnNum === 6 && carouselSeat === 6) {
      return "active";
    } else if (btnNum === 7 && carouselSeat === 7) {
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
  return (
    <div className="projectBoxContainer">
      <div className="projectTitle">Odinbook</div>
      <div className="imageCarousel">
        <div className="imagesContainer">
          <img src={imgArr[carouselSeat]} className="carImg"></img>
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
            onClick={() => handleCircleClicks(5)}
          ></button>
          <button
            className={`btnx ${activeBtn(5)}`}
            onClick={() => handleCircleClicks(5)}
          ></button>
          <button
            className={`btnx ${activeBtn(6)}`}
            onClick={() => handleCircleClicks(6)}
          ></button>
          <button
            className={`btnx ${activeBtn(7)}`}
            onClick={() => handleCircleClicks(7)}
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
