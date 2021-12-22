import styles from "./Attribution.module.scss";
import mark from "../../assets/attribution/PoweredByGiphy.gif";

export default function Attribution() {
  return (
    <aside className={styles.content}>
      <a href="https://giphy.com/" target="_blank" rel="noopener noreferrer">
        <img src={mark} alt="Powered by Giphy" />
      </a>
    </aside>
  );
}
