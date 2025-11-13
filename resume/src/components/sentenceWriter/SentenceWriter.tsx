import { sentencesModelArray } from "../../model/sentencesModel";
import styles from "./SentenceWriter.module.scss";
import UseSentenceWriter from "../../hooks/SentenceWriterHook";

const SentenceWriter = () => {
  const { typedWord } = UseSentenceWriter(sentencesModelArray);
  return (
    <div className={styles.sentenceContainer}>
      <div className={styles.currentWord}>
        <h2>{typedWord}</h2>
      </div>
      <div className={styles.lShape}>
        <h2>{"l"}</h2>
      </div>
    </div>
  );
};

export default SentenceWriter;
