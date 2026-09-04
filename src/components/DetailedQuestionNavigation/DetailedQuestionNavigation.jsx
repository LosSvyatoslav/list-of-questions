import styles from "./DetailedQuestionNavigation.module.scss";
import arrowLeftBlack from "../../logos and images/Arrow Left Black.svg";
import arrowRightBlack from "../../logos and images/Arrow Right Black.svg";
import { useContext, useEffect, useState } from "react";
import { QuestionsContext } from "../context/QuestionsContext";
import { useNavigate, useParams } from "react-router-dom";

const DetailedQuestionNavigation = () => {
  const { currentData, setCurrentPage, isLoading, currentPage } =
    useContext(QuestionsContext);
  const { data, total, limit } = currentData;

  const { questionId } = useParams();
  const questionIndex = data.findIndex(({ id }) => id === Number(questionId));
  
  const totalPages = Math.ceil(total / limit);
  const isLastQuestion =
    currentPage === totalPages && questionIndex === data.length - 1;
  const isFirstQuestion = currentPage === 1 && questionIndex === 0;

  const [shouldGoNext, setShouldGoNext] = useState(false);
  const [shouldGoPrevious, setShouldGoPrevious] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (shouldGoNext && !isLoading && data.length > 0) {
      navigate(`/public-questions/${data[0].id}`);
      setShouldGoNext(false);
    }
  }, [shouldGoNext, isLoading, data, navigate]);

  const handleNextQuestion = () => {
    if (questionIndex < data.length - 1) {
      const nextQuestion = data[questionIndex + 1];
      navigate(`/public-questions/${nextQuestion.id}`);
    } else {
      setShouldGoNext(true);
      setCurrentPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (shouldGoPrevious && !isLoading && data.length > 0) {
      navigate(`/public-questions/${data[data.length - 1].id}`);
      setShouldGoPrevious(false);
    }
  }, [shouldGoPrevious, isLoading, data, navigate]);

  const handlePreviousQuestion = () => {
    if (questionIndex > 0) {
      const previousQuestion = data[questionIndex - 1];
      navigate(`/public-questions/${previousQuestion.id}`);
    } else if (currentPage > 1) {
      setShouldGoPrevious(true);
      setCurrentPage((prev) => prev - 1);
    }
  };
  return (
    <div className={styles.nav}>
      <div className={styles.buttons}>
        <button className={styles.navButton} onClick={handlePreviousQuestion} disabled={isFirstQuestion}>
          <img src={arrowLeftBlack} alt="arrow left" />
          <span className={styles.title}>Предыдущий</span>
        </button>
        <button className={styles.navButton} onClick={handleNextQuestion} disabled={isLastQuestion}>
          <span className={styles.title}>Следующий</span>
          <img src={arrowRightBlack} alt="arrow right" />
        </button>
      </div>
    </div>
  );
};

export default DetailedQuestionNavigation;
