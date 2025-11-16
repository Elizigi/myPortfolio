import { sentencesModelArray } from "../../model/sentencesModel";
import styles from "./SentenceWriter.module.scss";
import UseSentenceWriter from "../../hooks/SentenceWriterHook";

const SentenceWriter = () => {
  const { words, isBreathing, selectedSentence } =
    UseSentenceWriter(sentencesModelArray);

  return (
    <div className={styles.sentenceContainer}>
      {sentencesModelArray.map((sentence, index) => (
        <div className={styles.sentence} key={sentence}>
          <div className={styles.currentWord}>
            {index === 1 ? <h2 className={styles.spacer}>__________________ </h2> : ""}{" "}
            <h2 className={index === 1 ?styles.spacedWord:""}>{words(index, sentence)}</h2>
          </div>
          <div className={`${isBreathing ? styles.breathing : ""}`}>
            <h2 className={styles.lShape}>
              {selectedSentence.current === index ? "|" : ""}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SentenceWriter;
