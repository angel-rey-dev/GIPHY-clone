import styles from "./Header.module.scss";
import Navbar from "../Navbar/Navbar";
import Searchbar from "../Searchbar/Searchbar";

export default function Header() {
  return (
    <header className={styles.container}>
      <Navbar />
      <Searchbar />
    </header>
  );
}
