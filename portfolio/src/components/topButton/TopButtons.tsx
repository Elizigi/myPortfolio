import type { FC } from "react";
import CustomButton from "../customButton/CustomButton";
import styles from "./TopButtons.module.scss";

interface TopButtonsProps {
  contacts?: boolean;
  projects?: string[];
}
const TopButtons: FC<TopButtonsProps> = ({ contacts, projects }) => {
  return (
    <div className={styles.topButtonsContainer}>
      {contacts && (
        <div className={styles.distantButtons}>
          <CustomButton written={"Contacts"} full />
          <CustomButton written={"Resume"} />
        </div>
      )}

      {projects?.map((project, index) => (
        <a
          href={project}
          key={project}
          target="_blank"
          rel="noopener noreferrer"
        >
          <CustomButton
            written={index === 0 ? "View Github" : "View Project ↗"}
            full={index === 0}
            lineUnder
          />
        </a>
      ))}
    </div>
  );
};

export default TopButtons;
