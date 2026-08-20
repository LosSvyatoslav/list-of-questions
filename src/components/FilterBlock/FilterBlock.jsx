import Complexity from "../Complexity/Complexity.jsx";
import Rating from "../Rating/Rating.jsx";
import Search from "../Search/Search";
import Skills from "../Skills/Skills.jsx";
import Specialization from "../Specialization/Specialization.jsx";
import Status from "../Status/Status.jsx";

import "./FilterBlock.css";


const FilterBlock = () => {

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
    </>
  );
};

export default FilterBlock;
