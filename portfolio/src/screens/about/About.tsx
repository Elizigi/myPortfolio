import AboutMeText from "../../components/aboutMe/AboutMeText";
import SvgSkillBar from "../../components/svgSkillBar/SvgSkillBar";
import styles from "./About.module.scss";

const About = () => {
  return (
    <div  className={styles.aboutScreen}>
      <div className={styles.mainContent}>
        <SvgSkillBar />
        <AboutMeText />
      </div>
    </div>
  );
};

export default About;
