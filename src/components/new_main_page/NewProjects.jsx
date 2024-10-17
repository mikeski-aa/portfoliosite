import TestImage from "../../assets/desktoppics/main-front.png";
import TestImageOne from "../../assets/desktoppics/loginDesk.png";
import { useEffect, useState } from "react";
import {
  desktopArray,
  newAssetArray,
  mobileArray,
} from "../../utils/imageImport";

function NewProjects() {
  const [index, setIndex] = useState(0);
  const imgArrDesktop = desktopArray();
  const imgArrMobile = mobileArray();
  const imgNewArr = newAssetArray();

  const imgTest = {
    0: <img src={TestImage} className="projImg" loading="lazy"></img>,
    1: <img src={TestImageOne} className="projImg" loading="lazy"></img>,
  };

  const renderedImage = imgTest[index];

  useEffect(() => {
    setTimeout(() => {
      if (index + 1 === imgNewArr.length) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 7100);
  }, [index]);

  return (
    <div className="newProjectsContainer">
      <div className="newProjectDiv">
        <div className="newProjHeading">Test Text Here</div>
        <div className="newProjImgContainer">
          {/* <img
            src={imgArrDesktop[index]}
            className="projImg desktop"
            loading="lazy"
          ></img>
          <img
            src={imgArrMobile[index]}
            className="projImg mobile"
            loading="lazy"
          ></img> */}
          <img
            src={imgNewArr[index]}
            className="projImg mobile"
            loading="lazy"
          ></img>
        </div>

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
