import styles from "./Home.module.scss";
import SentenceWriter from "../../components/sentenceWriter/SentenceWriter";
import SelfImage from "../../components/selfImage/SelfImage";
import SkillsButtons from "../../components/skillsButtons/SkillsButtons";
import TopButtons from "../../components/topButton/TopButtons";

const Home = () => {
  return (
    <div className={styles.homeScreen}>
      <div id="home" className={styles.bookMark}></div>
      <div className={styles.mainContent}>
        <div>
          <SentenceWriter />
          <TopButtons contacts={true} />
        </div>
        <SelfImage />
      </div>
      <div id="about">
        <SkillsButtons />
      </div>
    </div>
  );
};

export default Home;
