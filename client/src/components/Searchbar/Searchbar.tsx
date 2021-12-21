import styles from "./Searchbar.module.scss";
import { BsSearch } from "react-icons/bs";

export default function Searchbar() {
  return (
    <div className={styles.container}>
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
          <BsSearch />
        </button>
      </form>
    </div>
  );
}
