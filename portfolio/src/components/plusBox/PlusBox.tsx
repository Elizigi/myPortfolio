import styles from "./PlusBox.module.scss";

const PlusBox = () => {
  return (
    <div className={styles.plusBoxContainer}>
      <div className={styles.plusBox}>
        <div className={styles.title}>
          <h1>5</h1> <h1 className={styles.colored}>+</h1>
        </div>
        <h2>Completed Projects</h2>
      </div>
      <div className={styles.plusBox}>
        <div className={styles.title}>
          <h1>5</h1> <h1 className={styles.colored}>+</h1>
        </div>
        <h2>Completed Projects</h2>
      </div>
      <div className={styles.plusBox}>
        <div className={styles.title}>
          <h1>5</h1> <h1 className={styles.colored}>+</h1>
        </div>
        <h2>Completed Projects</h2>
      </div>
    </div>
  );
};

export default PlusBox;
