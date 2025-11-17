import { skillsBarArray } from "../../model/skillsModel";
import styles from "./SvgSkillBar.module.scss";

const SvgSkillBar = () => {
  return (
    <div className={styles.skillBarContainer}>
      {skillsBarArray.map((skill, index) => (
        <div key={skill.line} className={styles.skillBar}>
          {index === skillsBarArray.length-1 ? (
            ""
          ) : (
            <div className={styles.dot}>●</div>
          )}
          <div className={styles.midBar}></div>
          <img src={skill.svg} alt={skill.svg} />
          <h2>{skill.line}</h2>
        </div>
      ))}
    </div>
  );
};

export default SvgSkillBar;
