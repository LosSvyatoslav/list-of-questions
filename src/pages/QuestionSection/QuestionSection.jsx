import { useContext } from "react";
import FilterBlock from "../../components/FilterBlock/FilterBlock";

import Questions from "../../components/Questions/Questions";
import "./QuestionSection.css";
import { QuestionsContext } from "../../components/context/QuestionsContext";
import Loader from "../../components/Loader/Loader";

const QuestionSection = () => {
  const { isLoading, error, currentData } = useContext(QuestionsContext);
  return (
    <div className="container main__container">
     {isLoading && <p>Загрузка...</p>}
      {error && <p>Произошла ошибка при загрузке</p>}

      {!error && currentData.data.length === 0 && !isLoading && (
        <div className="notFound">
          <p>Ничего не найдено</p> <FilterBlock />
        </div>
      )}
      {!error && currentData.data.length > 0 && (
        <>
          <Questions />
          <FilterBlock />
        </>
      )}
  
    </div>
  );
};

export default QuestionSection;
