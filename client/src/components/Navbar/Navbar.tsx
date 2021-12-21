import styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
          <Logo />
      <ul className={styles.navList}>
        {/* <li> */}
        {/* </li> */}
        <li className={styles.navItem}>
          <NavLink className={styles.navLink} to="/categories">
            Categories
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink className={styles.navLink} to="/stickers">
            Stickers
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink className={styles.navLink} to="/reactions">
            Reactions
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink className={styles.navLink} to="/entertainment">
            Entertainment
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink className={styles.navLink} to="/gaming">
            Gaming
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink className={styles.navLink} to="/sports">
            Sports
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
