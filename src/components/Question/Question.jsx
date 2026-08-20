import arrow from "../../logos and images/Chevrone_Down.svg";
import dot from "../../logos and images/dot.svg";
import DOMPurify from "dompurify";
import "./Question.css";
import { useState } from "react";


const Question = ({ title, complexity, shortAnswer, rate, imageSrc }) => {
  const [isOpen, setIsOpen] = useState(false);


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
              <div className="questions__parameter">
                <span className="questions__label">Рейтинг:</span>
                <span className="questions__value">{rate}</span>
              </div>
              <div className="questions__parameter">
                <span className="questions__label">Сложность:</span>
                <span className="questions__value">{complexity}</span>
              </div>
            </div>
            <img
              src={imageSrc}
              alt="Questions imgage"
              className="questions__image"
            />
            <div
              className="question__answer"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(shortAnswer) }}
            />
          </div>
        )}
      </details>
    </li>
  );
};

export default Question;
