import TestImage from "../../assets/desktoppics/main-front.png";
import TestImageOne from "../../assets/desktoppics/loginDesk.png";
import { useEffect, useState } from "react";
import {
  desktopArray,
  newAssetArray,
  mobileArray,
} from "../../utils/imageImport";

function NewProjects() {
  const [imgIndex, setImgIndex] = useState(0);
  const imgArrDesktop = desktopArray();
  const imgArrMobile = mobileArray();
  const imgNewArr = newAssetArray();

  const indexWord = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
  };

  useEffect(() => {
    setTimeout(() => {
      if (imgIndex + 1 === imgNewArr.length) {
        setImgIndex(0);
      } else {
        setImgIndex(imgIndex + 1);
      }
    }, 2000);
  }, [imgIndex]);

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
            src={imgNewArr[imgIndex]}
            className="projImg new"
            loading="lazy"
          ></img>
          {/* {imgNewArr.map((item, index) => (
            <img
              key={index}
              src={item}
              className={`projImg new ${indexWord[]} ${indexWord[imgIndex]}`}
              loading="lazy"
            ></img>
          ))} */}
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
