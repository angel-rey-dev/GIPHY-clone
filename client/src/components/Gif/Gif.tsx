import styles from "./Gif.module.scss";
import { useState } from "react";
import loader from "../../assets/loader/loader1.gif";

type GifProps = {
  image: string;
  title: string;
};

export default function Gif({ image, title }: GifProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <img
      src={isLoaded ? image : loader}
      alt={title}
      onLoad={() => setIsLoaded(true)}
      className={
        isLoaded ? `${styles.image} ${styles.imageLoaded}` : styles.image
      }
    />
  );
}
