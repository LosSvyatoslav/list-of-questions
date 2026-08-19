import Question from "../Question/Question";
import Pagination from "../Pagination/Pagination";
import "./Questions.css";
import { QuestionsContext } from "../context/QuestionsContext";
import { useContext } from "react";
import filterIcon from "../../logos and images/Filter button.svg";
import FilterBlock from "../FilterBlock/FilterBlock";

const Questions = () => {
  const { currentData, openFilter, setOpenFilter } = useContext(QuestionsContext);
  const { data } = currentData;

  return (
    <div className="questions">
      <div className="questions__specialization">
        <h1 className="questions__title">Вопросы React, JavaScript</h1>
        <img src={filterIcon} alt="Mobile filter icon" className="mobile__filter-button" onClick={() => setOpenFilter(prev => !prev)}/>
      </div>
      {openFilter && <FilterBlock mobile={true}/>}
      <ul className="questions__list">
        {data.map(({ title, id, complexity, shortAnswer, rate, imageSrc }) => (
          <Question
            key={id}
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
