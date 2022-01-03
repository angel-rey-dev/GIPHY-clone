import styles from "./Preview.module.scss";
// Icons
import { HiTrendingUp } from "react-icons/hi";
import { MdOutlineStickyNote2 } from "react-icons/md";
import Slider from "../Slider/Slider";
import { Link } from "react-router-dom";

export default function Preview({ trending, icon, title, type, link }: any) {
  const icons: any = {
    trending: <HiTrendingUp />,
    stickers: <MdOutlineStickyNote2 />,
  };

  return (
    <section className={styles.container}>
      <header>
        <h2>
          {icons[icon]}
          {title}
        </h2>
        <Link to={link}>All The {type}</Link>
      </header>
      <Slider elements={trending} type={type} />
    </section>
  );
}
