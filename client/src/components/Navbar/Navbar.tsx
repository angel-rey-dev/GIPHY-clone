import styles from "./navbar.module.scss";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import { useState } from "react";

export default function Navbar() {
  // const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={styles.nav}>
      <Logo />
      <HamburgerButton setIsOpen={setIsOpen} isOpen={isOpen} />
      <ul
        className={
          isOpen ? `${styles.navListOpen} ${styles.navList}` : styles.navList
        }
      >
        <li className={`${styles.navItem} ${styles.navItemBtn}`}>
          <HamburgerButton setIsOpen={setIsOpen} isOpen={isOpen} />
        </li>
        <li className={styles.navItem}>
          <NavLink className={styles.navLink} to="/categories">
            Categories
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink className={styles.navLink} to="/search/random">
            Random
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink className={styles.navLink} to="/search/stickers">
            Stickers
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink className={styles.navLink} to="/translate">
            Translate
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink className={styles.navLink} to="/search/reactions">
            Reactions
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink className={styles.navLink} to="search/gaming">
            Gaming
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
