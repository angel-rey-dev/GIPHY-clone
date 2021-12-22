import styles from "./Footer.module.scss";
import mark from "../../assets/attribution/PoweredByGiphy.gif";

export default function Attribution() {
  return (
    <footer className={styles.content}>
      <a href="https://giphy.com/" target="_blank" rel="noopener noreferrer">
        <img src={mark} alt="Powered by Giphy" />
      </a>
      <strong>
        Developed by
        <a
          href="https://github.com/Jose-Angel-Rey"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jose Angel Rey
        </a>
      </strong>
    </footer>
  );
}
