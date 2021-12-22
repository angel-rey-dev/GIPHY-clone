import { Link } from "react-router-dom";
import styles from "./Banner.module.scss";
// import banner from "../../assets/giphy/banner.gif";

export default function Banner() {
  return (
    <aside className={styles.container}>
      <Link to="/">
        <picture>
          <source
            media="(min-width:767px)"
            srcSet="https://media.giphy.com/headers/2021-11-11-23-1636647787/HOLIDAY_BANNER_HP-2021.gif"
          />
          <img
            src="https://media.giphy.com/headers/2021-11-11-23-1636647787/HOLIDAY_BANNER_MOBILE-2021.gif"
            alt="All of the Holiday GIFs!"
          />
        </picture>
      </Link>
    </aside>
  );
}
