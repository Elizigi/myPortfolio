import SvgSkillBar from "../../components/svgSkillBar/SvgSkillBar";
import styles from "./About.module.scss";

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.mainContent}>
        <div>
          <SvgSkillBar />
        </div>
      </div>
    </div>
  );
};

export default About;
