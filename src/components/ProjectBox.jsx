import "../styles/projectbox.css";
import loginPc from "../assets/odinbookpics/loginpc.png";
import mainfeedPc from "../assets/odinbookpics/mainfeedpagepc.png";
import friendPc from "../assets/odinbookpics/friendspagepc.png";
import profilePc from "../assets/odinbookpics/profilepagepc.png";
import { useState } from "react";

// temporarily using set values, later set it up to use props and pass valuse into this component
function ProjectBox() {
  const [carouselSeat, setCarouselSeat] = useState(0);
  const imgArr = [loginPc, mainfeedPc, friendPc, profilePc];

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

  return (
    <div className="projectBoxContainer">
      <div className="projectTitle">Odinbook</div>
      <div className="imageCarousel">
        <img src={imgArr[carouselSeat - 1]} className="test"></img>
        <img src={imgArr[carouselSeat]} className="carImg"></img>
        <div className="LRbuttons">
          <button className="goLeft" onClick={handleGoLeft}>
            Left
          </button>
          <button className="goRight" onClick={handleGoRight}>
            Right
          </button>
        </div>
        <div className="positionButtons">
          <button className="btn1">1</button>
          <button className="btn2">2</button>
          <button className="btn3">3</button>
        </div>
      </div>
      <div className="projectDescription">
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

export default ProjectBox;
