import PlusBox from "../plusBox/PlusBox";
import styles from "./AboutMeText.module.scss";

const AboutMeText = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1>About Me</h1>
      <p>
        I'm a full-stack developer who builds projects from scratch and gets
        things done fast. I focus on clean structure, smooth user experience,
        and making everything work reliably. I'm independent, sharp, and always
        improving.
      </p>
      <PlusBox />
    </div>
  );
};

export default AboutMeText;
