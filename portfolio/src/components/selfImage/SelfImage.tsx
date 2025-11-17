import styles from "./SelfImage.module.scss";
import empty from "../../images/empty.png";

const SelfImage = () => {
  return (
    <div className={styles.imageContainer}>
      <div className={styles.imgContainer}>
        <img src={empty} alt="self" />
      </div>
      <div className={styles.circleBackground}>⨀</div>
      <div className={styles.imageBackground}></div>
    </div>
  );
};

export default SelfImage;
