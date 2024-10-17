import TestImage from "../../assets/desktoppics/main-front.png";
import TestImageOne from "../../assets/desktoppics/loginDesk.png";
import { useEffect, useState } from "react";

function NewProjects() {
  const [index, setIndex] = useState(0);
  const imgArr = [TestImage, TestImageOne];

  const imgTest = {
    0: <img src={TestImage} className="projImg" loading="lazy"></img>,
    1: <img src={TestImageOne} className="projImg" loading="lazy"></img>,
  };

  const renderedImage = imgTest[index];

  useEffect(() => {
    setTimeout(() => {
      if (index + 1 === imgArr.length) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 5000);
  }, [index]);

  return (
    <div className="newProjectsContainer">
      <div className="newProjectDiv">
        <div className="newProjHeading">Test Text Here</div>
        <div className="newProjImgContainer"></div>
        {renderedImage ? renderedImage : null}

        <div className="newProjDesc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A voluptatem
          dolorum eveniet deleniti non eaque iste provident magni quae! Quos,
          esse blanditiis. Exercitationem blanditiis asperiores praesentium iure
          necessitatibus, fuga minus ullam sint dolorum atque quo commodi
          ducimus, iusto reprehenderit! Pariatur quo eum tenetur atque iure odio
          ea accusantium natus omnis.
        </div>
      </div>
    </div>
  );
}

export default NewProjects;
