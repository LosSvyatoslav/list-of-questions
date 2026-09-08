import styles from "./DetailedQuestionNavigation.module.scss";
import arrowLeftBlack from "../../logos and images/Arrow Left Black.svg";
import arrowRightBlack from "../../logos and images/Arrow Right Black.svg";
import { useContext, useEffect, useState } from "react";
import { QuestionsContext } from "../context/QuestionsContext";
import { useNavigate, useParams } from "react-router-dom";

const DetailedQuestionNavigation = () => {
  const { navigationIds } = useContext(QuestionsContext);
  const { questionId } = useParams();
  const currentIndex = navigationIds.findIndex(
    (id) => id === Number(questionId),
  );

  const isLastQuestion = currentIndex === navigationIds.length - 1;
  const isFirstQuestion = currentIndex === 0;

  const navigate = useNavigate();

  const handleNextQuestion = () => {
    if (currentIndex < navigationIds.length - 1) {
      navigate(`/public-questions/${navigationIds[currentIndex + 1]}`);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentIndex > 0) {
      navigate(`/public-questions/${navigationIds[currentIndex - 1]}`);
    } 
  };
  return (
    <div className={styles.nav}>
      <div className={styles.buttons}>
        <button
          className={styles.navButton}
          onClick={handlePreviousQuestion}
          disabled={isFirstQuestion}
        >
          <img src={arrowLeftBlack} alt="arrow left" />
          <span className={styles.title}>Предыдущий</span>
        </button>
        <button
          className={styles.navButton}
          onClick={handleNextQuestion}
          disabled={isLastQuestion}
        >
          <span className={styles.title}>Следующий</span>
          <img src={arrowRightBlack} alt="arrow right" />
        </button>
      </div>
    </div>
  );
};

export default DetailedQuestionNavigation;
