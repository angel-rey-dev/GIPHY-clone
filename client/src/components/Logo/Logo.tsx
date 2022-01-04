import styles from "./Logo.module.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.gif";

export default function Logo() {
  return (
    <Link to="/" className={styles.container}>
      <img src={logo} alt="Gifo logo" className={styles.image} />
      <h1 className={styles.title}>GIPHO</h1>
    </Link>
  );
}
