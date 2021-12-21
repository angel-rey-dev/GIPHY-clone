import styles from "./Searchbar.module.scss";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Searchbar() {
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPosition(window.scrollY);
    });
  }, []);
  return (
    <div
      className={
        scrollPosition > 70
          ? `${styles.container} ${styles.containerSticky}`
          : styles.container
      }
    >
      <form className={styles.form}>
        <div className={styles.inputContainer}>
          <label htmlFor="search" className={styles.inputLabel}>
            Search a gif
          </label>
          <input
            autoComplete="off"
            placeholder="Search all the GIFs and Stickers"
            type="search"
            name="search"
            id="search"
            className={styles.input}
          />
        </div>
        <button type="submit" title="Search" className={styles.formBtn}>
          <FaSearch />
        </button>
      </form>
    </div>
  );
}
