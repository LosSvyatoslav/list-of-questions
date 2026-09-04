import Question from "../Question/Question";
import Pagination from "../Pagination/Pagination";
import "./Questions.css";
import { QuestionsContext } from "../context/QuestionsContext";
import { useContext } from "react";
import filterIcon from "../../logos and images/Filter button.svg";
import MobileFilterBlock from "../MobileFilterBlock/MobileFilterBlock";

const Questions = () => {
  const { currentData, openFilter, setOpenFilter } =
    useContext(QuestionsContext);
  const { data } = currentData;

  return (
    <div className="questions">
      <div className="questions__specialization">
        <h1 className="questions__title">Вопросы React, JavaScript</h1>
        <button className="mobile__filter-btn" aria-expanded={openFilter} onClick={() => setOpenFilter((prev) => !prev)}>
          <img
            src={filterIcon}
            alt="Mobile filter icon"
            className="mobile__filter-icon"
            
          />
        </button>
      </div>
      {openFilter && <MobileFilterBlock/>}
      <ul className="questions__list">
        {data.map(({ title, id, complexity, shortAnswer, rate, imageSrc }) => (
          <Question
            key={id}
            id={id}
            title={title}
            complexity={complexity}
            shortAnswer={shortAnswer}
            rate={rate}
            imageSrc={imageSrc}
          />
        ))}
        <Pagination />
      </ul>
    </div>
  );
};

export default Questions;
