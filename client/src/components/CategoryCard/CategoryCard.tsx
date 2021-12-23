import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CategoryCard.module.scss";

type CategoryCardProps = {
  id: string;
  name: string;
  gif: {
    large: string;
    medium: string;
  };
};

export default function CategoryCard({ id, name, gif }: CategoryCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Link to={`/search/${encodeURI(name)}`} className={styles.link}>
      <div className={styles.container}>
        <img
          src={gif.medium}
          alt={name}
          onLoad={() => setIsLoaded(true)}
          className={
            isLoaded ? `${styles.image} ${styles.imageLoaded}` : styles.image
          }
        />
        <h2 className={styles.title}>{name}</h2>
      </div>
    </Link>
  );
}
