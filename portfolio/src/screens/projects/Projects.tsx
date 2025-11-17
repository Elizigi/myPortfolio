import styles from "./Projects.module.scss";

const Projects = () => {
  return (
    <div className={styles.projectScreen}>
      <h1>Projects</h1>
      <div className={styles.skillBar}>
        <div className={styles.dot}>●</div>
        <div className={styles.midBar}></div>
      </div>
    </div>
  );
};

export default Projects;
