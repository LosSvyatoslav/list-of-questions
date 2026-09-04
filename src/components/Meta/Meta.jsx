import styles from "./Meta.module.scss";
import figmaLogo from "../../logos and images/Figma.svg";
import closeButton from "../../logos and images/Close button.svg"

const Meta = ({ complexity, rate, questionSkills, keywords, author, isMetaOpen, handleCloseMeta }) => {
  return (
    <div className={`${styles.meta} ${isMetaOpen ? styles.metaMobile : ""}`}>
      {isMetaOpen && <button className={styles.closeButton} onClick={handleCloseMeta}><img src={closeButton} alt="close button" /></button>}
      <div className={styles.lvl}>
        <span className={styles.title}>Уровень:</span>
        <div className={styles.paramsBox}>
          <div className={styles.params}>
            <span className={styles.label}>Сложность:</span>
            <span className={styles.mark}>{complexity}</span>
          </div>

          <div className={styles.params}>
            <span className={styles.label}>Рейтинг:</span>
            <span className={styles.mark}>{rate}</span>
          </div>
        </div>
      </div>

      <div className={styles.skills}>
        <span className={styles.title}>Навыки:</span>
        <div className={styles.skillsBox}>
            {questionSkills.map(({ title }) => (
          <div key={title} className={styles.skill}>
            <img src={figmaLogo} alt="skill logo" />
            <span>{title}</span>
          </div>
        ))}
        </div>
      </div>

      <div className={styles.keywords}>
        <span className={styles.title}>Ключевые слова: </span>
       <div className={styles.keywordsBox}>
         {keywords.map((word) => (
          <span className={styles.keyword} key={word}>#{word}</span>
        ))}
       </div>
      </div>

      <div className={styles.author}>
        <span>Автор:</span>
        <span className={styles.name}>{author}</span>
      </div>
    </div>
  );
};

export default Meta;
