import styles from "./Loader.module.scss";
import loader from "../../assets/loader/loader1.gif";

export default function Loader() {
  return (
    <div className={styles.container}>
      <img src={loader} alt="loader" className={styles.gif} />
    </div>
  );
}
