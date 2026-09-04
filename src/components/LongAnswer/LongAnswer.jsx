import styles from "./LongAnswer.module.scss";
import arrowDown from "../../logos and images/Chevrone_Down.svg";
import DOMPurify from "dompurify";
import { useEffect, useState, useRef } from "react";

const LongAnswer = ({ longAnswer, questionId }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const answerRef = useRef(null);

  useEffect(() => {
    setIsExpanded(false);
  }, [questionId]);

  useEffect(() => {
    const element = answerRef.current;

    if (!element) return;

    setIsOverflowing(element.scrollHeight > 785);
  }, [longAnswer]);

  const handleExpand = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <div
      className={`${styles.answerLong} ${isExpanded ? styles.expanded : ""} ${isOverflowing ? styles.overflowing : ""}`}
    >
      <h3 className={styles.answerTitle}>Развернутый ответ</h3>
      <div className={styles.answerText} ref={answerRef}>
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(longAnswer),
          }}
        />
      </div>
      {isOverflowing && (
        <button className={styles.expandButton} onClick={handleExpand}>
          <span>{isExpanded ? "Свернуть" : "Развернуть"}</span>
          <img src={arrowDown} alt="arrow down" />
        </button>
      )}
    </div>
  );
};

export default LongAnswer;
