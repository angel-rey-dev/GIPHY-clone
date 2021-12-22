import styles from "./Header.module.scss";
import Navbar from "../Navbar/Navbar";
import Searchbar from "../Searchbar/Searchbar";
import Attribution from "../Attribution/Attribution";

export default function Header() {
  return (
    <header className={styles.container}>
      <Navbar />
      <Searchbar />
      <Attribution />
    </header>
  );
}
