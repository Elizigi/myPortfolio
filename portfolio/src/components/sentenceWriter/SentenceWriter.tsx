import { sentencesModelArray } from "../../model/sentencesModel";
import styles from "./SentenceWriter.module.scss";
import UseSentenceWriter from "../../hooks/SentenceWriterHook";

const SentenceWriter = () => {
  const { wordFinished, isBreathing, selectedSentence, words } =
    UseSentenceWriter(sentencesModelArray);

  return (
    <div className={styles.sentenceContainer}>
      {sentencesModelArray.map((sentence, index) => (
        <div className={styles.sentence} key={sentence}>
          <div className={styles.currentWord}>
            {index === 1 ? <h2 className={styles.spacer}>_________ </h2> : ""}
            <h2
              className={`${index === 1 ? styles.spacedWord : ""} ${
                index === 0 ? styles.smallWord : ""
              }`}
            >
              {words(index, sentence)}
            </h2>
          </div>
          {wordFinished && index === 0 ? <h2 className={styles.dot}>.</h2> : ""}
          <div className={`${isBreathing ? styles.breathing : ""}`}>
            <h2
              className={styles.lShape}
              style={{ opacity: selectedSentence.current === index ? 1 : 0 }}
            >
              |
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SentenceWriter;
