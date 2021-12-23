import styles from "./GoTopButton.module.scss";
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function GoTopButton() {
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPosition(window.scrollY);
    });
  }, []);

  const handleClick = () => window.scrollTo(0, 0);

  return (
    <button
      type="button"
      title="Go to top"
      className={
        scrollPosition > 700 ? `${styles.btn} ${styles.btnVisible}` : styles.btn
      }
      onClick={() => handleClick()}
    >
      <FaArrowUp />
    </button>
  );
}
