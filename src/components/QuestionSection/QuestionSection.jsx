import { useContext } from "react";
import FilterBlock from "../FilterBlock/FilterBlock";
import Questions from "../Questions/Questions";
import "./QuestionSection.css";
import { QuestionsContext } from "../context/QuestionsContext";

const QuestionSection = () => {
  const { isLoading, error, currentData } = useContext(QuestionsContext);
  return (
    <main className="main">
      <div className="container main__container">
        {isLoading && <p>Загрузка...</p>}

        {error && <p>Произошла ошибка при загрузке</p>}

        {!isLoading && !error && currentData.data.length === 0 && (
          <p>Ничего не найдено</p>
        )}
        {!isLoading && !error && currentData.data.length > 0 && (
          <>
            <Questions />
            <FilterBlock />
          </>
        )}
      </div>
    </main>
  );
};

export default QuestionSection;
