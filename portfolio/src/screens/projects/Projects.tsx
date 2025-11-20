import ProjectsBox from "../../components/projectsBox/ProjectsBox";
import styles from "./Projects.module.scss";

const Projects = () => {
  return (
    <div id="projects" className={styles.projectScreen}>
      <h1>Projects</h1>
      <div className={styles.skillBar}>
        <div className={styles.dot}>●</div>
        <div className={styles.midBar}></div>
      </div>
      <ProjectsBox />
    </div>
  );
};

export default Projects;
