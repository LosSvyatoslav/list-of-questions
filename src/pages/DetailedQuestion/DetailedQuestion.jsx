import { useNavigate, useParams } from "react-router-dom";
import { questionsUrl } from "../../components/context/QuestionsProvider";
import { useFetch } from "../../components/hooks/useFetch";
import DOMPurify from "dompurify";
import arrowLeft from "../../logos and images/Arrow Left.svg";
import styles from "./DetailedQuestion.module.scss";
import figmaImage from "../../logos and images/FigmaImage.svg";
import metaMobileIcon from "../../logos and images/Meta button.svg";
import Loader from "../../components/Loader/Loader";
import Meta from "../../components/Meta/Meta";
import Guru from "../../components/Guru/Guru";
import DetailedQuestionNavigation from "../../components/DetailedQuestionNavigation/DetailedQuestionNavigation";
import LongAnswer from "../../components/LongAnswer/LongAnswer";
import { useState } from "react";

const DetailedQuestion = () => {
  const { questionId } = useParams();
  const navigate = useNavigate();
  const question = useFetch(`${questionsUrl}/${questionId}`);
  const [isMetaOpen, setIsMetaOpen] = useState();

  const handleOpenMeta = () => {
    setIsMetaOpen((prev) => !prev);
  };

  const handleCloseMeta = () => {
    setIsMetaOpen((prev) => !prev);
  }

  const handleClickBack = () => {
    navigate("/public-questions");
  };
  if (!question) {
    return <Loader />;
  }
  const {
    title,
    description,
    longAnswer,
    shortAnswer,
    rate,
    complexity,
    keywords,
    questionSkills,
    createdBy: { username: author },
  } = question;

  return (
    <section className={styles.page}>
      <div className="container">
        <button className={styles.backButton} onClick={handleClickBack}>
          <img src={arrowLeft} alt="arrow left" />
          <span className={styles.backButton__title}>Назад</span>
        </button>
        <div className={styles.question}>
          <div className={styles.questionBlock}>
            <div className={styles.header}>
              <img
                className={styles.questionIcon}
                src={figmaImage}
                alt="figma logo"
              />
              <div className={styles.questionText}>
                <div className={styles.questionTitle}>
                  <h2>{title}</h2>
                  <button
                    className={styles.filterButton}
                    onClick={handleOpenMeta}
                  >
                    <img
                      className={styles.filterIcon}
                      src={metaMobileIcon}
                      alt="filter button icon"
                    />
                  </button>
                </div>
                <span>{description}</span>
              </div>
            </div>

              {isMetaOpen && (
                    <div className={styles.metaMobile}>
                      <Meta
                        handleCloseMeta={handleCloseMeta}
                        isMetaOpen={isMetaOpen}
                        rate={rate}
                        complexity={complexity}
                        questionSkills={questionSkills}
                        keywords={keywords}
                        author={author}
                      />
                    </div>
                  )}

            <DetailedQuestionNavigation />

            <div className={styles.answerShort}>
              <h3 className={styles.answerTitle}>Краткий ответ</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(shortAnswer),
                }}
              />
            </div>
            <LongAnswer longAnswer={longAnswer} questionId={questionId} />
          </div>

          <div className={styles.rightSide}>
            <div className={styles.meta}>
              <Meta
                rate={rate}
                complexity={complexity}
                questionSkills={questionSkills}
                keywords={keywords}
                author={author}
              />
            </div>

            <Guru />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedQuestion;
