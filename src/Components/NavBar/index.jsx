import Button from "../Button";
import styles from "./navbar.module.css";
import Logo from "../Logo";
import { Link } from "react-router-dom";
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

          <Link to="/SignUpForm">
            <Button variant="tertiary">Sign Up</Button>
          </Link>

          <Link to="/LoginForm">
            <Button variant="tertiary">Login</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
