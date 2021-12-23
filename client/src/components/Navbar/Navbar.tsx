import styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import { useState } from "react";

export default function Navbar() {
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
          <NavLink className={styles.navLink} to="/sports">
            Translate
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink className={styles.navLink} to="/gaming">
            Gaming
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
