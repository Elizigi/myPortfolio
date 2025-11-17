import { projectsModelArray } from "../../model/projectModel";
import styles from "./ProjectsBox.module.scss";

const ProjectsBox = () => {
  return (
    <div className={styles.projectsBoxContainer}>
      {projectsModelArray.map((project) => (
        <div key={project.name} className={styles.projectBox}>
          <div className={styles.textColumn}>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
          </div>
          <img src={project.photo} alt={project.photo} />
        </div>
      ))}
    </div>
  );
};

export default ProjectsBox;
