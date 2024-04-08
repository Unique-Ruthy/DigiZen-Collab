import Button from "../Button";
import styles from "./navbar.module.css";
import Logo from "../Logo";
const Navbar = () => {
  return (
    <div className={styles.navWrapper}>
      <div className={styles.maxWidth}>
        <div>
          <Logo />
        </div>
        <div className={styles.navBar}>
          <ul className={styles.navList}>
            <li className={styles.navLists}>Home</li>
            <li className={styles.navLists}>Resources</li>
            <li className={styles.navLists}>Blog</li>
            <li className={styles.navLists}>About</li>
          </ul>
          <Button variant="tertiary">Sign Up</Button>
          <Button variant="tertiary">Login</Button>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
