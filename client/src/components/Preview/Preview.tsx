import React from "react";
import styles from "./Preview.module.scss";
// Icons
import { HiTrendingUp } from "react-icons/hi";
import { BiHappy } from "react-icons/bi";
import { MdOutlineStickyNote2 } from "react-icons/md";
import Slider from "../Slider/Slider";
import { Link } from "react-router-dom";

type PreviewProps = {
  trending: any;
  icon: string;
  title: string;
  type: string;
  link: string;
};

const icons: any = {
  trending: <HiTrendingUp />,
  stickers: <MdOutlineStickyNote2 />,
  funny: <BiHappy />,
};

function Preview({ trending, icon, title, type, link }: PreviewProps) {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h2>
          {icons[icon]}
          {title}
        </h2>
        <Link to={link}>All the {type}</Link>
      </header>
      <Slider elements={trending} type={type} />
    </section>
  );
}

export default React.memo(
  Preview,
  (prevProps: PreviewProps, nextProps: PreviewProps) =>
    prevProps.trending === nextProps.trending
);
