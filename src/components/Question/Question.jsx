import arrow from "../../logos and images/Chevrone_Down.svg";
import dot from "../../logos and images/dot.svg";
import detailsDots from "../../logos and images/details.svg";
import arrowRight from "../../logos and images/Arrow Right.svg";
import DOMPurify from "dompurify";
import "./Question.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

  const Question = ({ id, title, complexity, shortAnswer, rate, imageSrc }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleShowMore = (questionId) => {
    navigate(`./${questionId}`)
  };

  return (
    <li className="questions__item">
      <details className="question">
        <summary
          className="question__block"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <div className="question__left-side">
            <img src={dot} alt="list marker" />
            <span className="question__title">{title}</span>
          </div>
          <img src={arrow} alt="show details" className="question__arrow" />
        </summary>
        {isOpen && (
          <div className="question__details">
            <div className="questions__meta">
              <div className="questions__leftSide">
                <div className="questions__parameter">
                  <span className="questions__label">Рейтинг:</span>
                  <span className="questions__value">{rate}</span>
                </div>
                <div className="questions__parameter">
                  <span className="questions__label">Сложность:</span>
                  <span className="questions__value">{complexity}</span>
                </div>
              </div>
              <button className="button questions__more" onClick={() => handleShowMore(id)}>
                <img src={detailsDots} alt="show details" />
              </button>
            </div>
            <img
              src={imageSrc}
              alt="Questions imgage"
              className="questions__image"
            />
            <div
              className="question__answer"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(shortAnswer),
              }}
            />
            <button className="button questions__more--mobile" onClick={() => handleShowMore(id)}>
              <span className="button__title">Подробнее</span>
              <img src={arrowRight} alt="arrow right" />
            </button>
          </div>
        )}
      </details>
    </li>
  );
};

export default Question;
