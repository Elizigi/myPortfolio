import styles from "./Home.module.scss";
import SentenceWriter from "../../components/sentenceWriter/SentenceWriter";
import SelfImage from "../../components/selfImage/SelfImage";
import SkillsButtons from "../../components/skillsButtons/SkillsButtons";
import TopButtons from "../../components/topButton/TopButtons";

const Home = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.mainContent}>
        <div>
          <SentenceWriter />
          <TopButtons />
        </div>
        <SelfImage />
      </div>
      <SkillsButtons></SkillsButtons>
    </div>
  );
};

export default Home;
