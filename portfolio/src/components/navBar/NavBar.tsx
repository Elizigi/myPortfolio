import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <h2>Eli P. Zigdon</h2>
      <div className={styles.navButtons}>
        <a href="#home">
          <button>Home</button>
        </a>
        <a href="#about">
          <button>About</button>
        </a>
        <a href="#projects">
          <button>Projects</button>
        </a>
        <a href="#contacts">
          <button>Contact</button>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
