import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <h2>Eli P. Zigdon</h2>
      <div className={styles.navButtons}>
        <button>Home</button>
        <button>About</button>
        <button>Projects</button>
        <button>Contact</button>
      </div>
    </div>
  );
};

export default NavBar;
