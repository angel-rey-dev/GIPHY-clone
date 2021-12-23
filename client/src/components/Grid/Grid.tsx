import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Grid.module.scss";

type GridProps = {
  items: Array<any>;
};

export default function Grid({ items }: GridProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className={`${styles.container} ${styles.grid}`}>
      {items &&
        items.map((item) => (
          <Link to="/" className={styles.gridItem}>
            <div key={item.id}>
              <img
                src={item.images.medium}
                alt={item.title}
                onLoad={() => setIsLoaded(true)}
                className={
                  isLoaded
                    ? `${styles.gridItemImage} ${styles.gridItemImageLoaded}`
                    : styles.gridItemImage
                }
              />
            </div>
          </Link>
        ))}
    </section>
  );
}
