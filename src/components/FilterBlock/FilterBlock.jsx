import Complexity from "../Complexity/Complexity.jsx";
import Rating from "../Rating/Rating.jsx";
import Search from "../Search/Search";
import Skills from "../Skills/Skills.jsx";
import Specialization from "../Specialization/Specialization.jsx";
import Status from "../Status/Status.jsx";

import closeBtn from "../../logos and images/Close button.svg";

import "./FilterBlock.css";
import { QuestionsContext } from "../context/QuestionsContext.js";
import { useContext } from "react";

const FilterBlock = ({ mobile = false }) => {
  const { setOpenFilter } = useContext(QuestionsContext);
  return (
    <>
      <div className="filters">
        <Search />
        <Specialization />
        <Skills />
        <Complexity />
        <Rating />
        <Status />
      </div>
      {mobile && (
        <div className="mobile__filters">
          <div className="filter-btn__wrapper" onClick={() => setOpenFilter(prev => !prev)}>
            <img
              src={closeBtn}
              alt="Close button"
              className="filter__close-btn"
            />
          </div>
          <Search />
          <Specialization />
          <Skills />
          <Complexity />
          <Rating />
          <Status />
        </div>
      )}
    </>
  );
};

export default FilterBlock;
