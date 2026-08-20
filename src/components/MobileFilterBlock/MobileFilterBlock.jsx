import Complexity from "../Complexity/Complexity.jsx";
import Rating from "../Rating/Rating.jsx";
import Search from "../Search/Search.jsx";
import Skills from "../Skills/Skills.jsx";
import Specialization from "../Specialization/Specialization.jsx";
import Status from "../Status/Status.jsx";

import closeBtn from "../../logos and images/Close button.svg";

import "./MobileFilterBlock.css";
import { QuestionsContext } from "../context/QuestionsContext.js";
import { useContext } from "react";

const MobileFilterBlock = () => {
  const { setOpenFilter } = useContext(QuestionsContext);
  return (
    <>
        <div className="mobile__filters">
          <button
            className="filters__close-btn"
            onClick={() => setOpenFilter((prev) => !prev)}
          > 
            <img
              src={closeBtn}
              alt="Close button"
              className="close-btn__icon"
            />
          </button>
          <Search />
          <Specialization />
          <Skills />
          <Complexity />
          <Rating />
          <Status />
        </div>
    </>
  );
};

export default MobileFilterBlock;
