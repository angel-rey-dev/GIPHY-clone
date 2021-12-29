import styles from "./Searchbar.module.scss";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function Searchbar() {
  const navigate = useNavigate();

  const [scrollPosition, setScrollPosition] = useState(window.scrollY);
  const [input, setInput] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>  setInput(e.target.value);
  
  const resetInput = () => setInput("");
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetInput();
    navigate(`/search/${input}`);
  };

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
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.inputContainer}>
          <label htmlFor="search" className={styles.inputLabel}>
            Search a gif
          </label>
          <input
            autoComplete="off"
            className={styles.input}
            id="search"
            name="search"
            placeholder="Search all the GIFs and Stickers"
            required
            type="search"
            value={input}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button type="submit" title="Search" className={styles.formBtn}>
          <FaSearch />
        </button>
      </form>
    </div>
  );
}
