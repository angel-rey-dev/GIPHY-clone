import styles from "./Navbar.module.scss";
import { Link, NavLink } from 'react-router-dom';
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
          <Link className={styles.navLink} to="/search/stickers">
            Stickers
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            className={styles.navLink}
            to={`/search/${encodeURI("reactions")}`}
          >
            Reactions
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            className={styles.navLink}
            to={`/search/${encodeURI("entertainment")}`}
            // onClick={() => navigate("/search/entertainment")}
          >
            Entertainment
          </Link>
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
